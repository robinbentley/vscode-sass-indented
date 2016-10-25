/*
  The core functionality of the autocomplete is work done by Stanislav Sysoev (@d4rkr00t)
  in his stylus extension and been adjusted to account for the slight differences between
  the languages.

  Original stylus version: https://github.com/d4rkr00t/language-stylus
*/
import {
  CancellationToken,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  DefinitionProvider,
  Position,
  Range,
  TextDocument,
  workspace,
  Uri,
  Location,
  commands,
  SymbolInformation,
  WorkspaceSymbolProvider,
  DocumentSymbolProvider,
  SymbolKind
} from 'vscode';

import * as cssSchema from './schemas/cssSchema';
import sassSchema from './schemas/sassSchema';
import fs = require('fs');
let globToRegExp = require('glob-to-regexp');

let files: File[] = [];
let sassConfig: { files?: string[], exclude?: string[] } = {};

/**
 * Naive check whether currentWord is class, id or placeholder
 * @param {String} currentWord
 * @return {Boolean}
 */
export function isClassOrId(currentWord: string): boolean {
  return currentWord.startsWith('.') || currentWord.startsWith('#') || currentWord.startsWith('%');
}

/**
 * Naive check whether currentWord is at rule
 * @param {String} currentWord
 * @return {Boolean}
 */
export function isAtRule(currentWord: string): boolean {
  return currentWord.startsWith('\@');
}

/**
 * Naive check whether currentWord is value for given property
 * @param {Object} cssSchema
 * @param {String} currentWord
 * @return {Boolean}
 */
export function isValue(cssSchema, currentWord: string): boolean {
  const property = getPropertyName(currentWord);

  return property && Boolean(findPropertySchema(cssSchema, property));
}

/**
 * Formats property name
 * @param {String} currentWord
 * @return {String}
 */
export function getPropertyName(currentWord: string): string {
  return currentWord.trim().replace(':', ' ').split(' ')[0];
}

/**
 * Search for property in cssSchema
 * @param {Object} cssSchema
 * @param {String} property
 * @return {Object}
 */
export function findPropertySchema(cssSchema, property: string) {
  return cssSchema.data.css.properties.find(item => item.name === property);
}

/**
 * Returns at rules list for completion
 * @param {Object} cssSchema
 * @param {String} currentWord
 * @return {CompletionItem}
 */
export function getAtRules(cssSchema, currentWord: string): CompletionItem[] {
  if (!isAtRule(currentWord)) return [];

  return cssSchema.data.css.atdirectives.map(property => {
    const completionItem = new CompletionItem(property.name);

    completionItem.detail = property.desc;
    completionItem.kind = CompletionItemKind.Keyword;

    return completionItem;
  });
}

/**
 * Returns property list for completion
 * @param {Object} cssSchema
 * @param {String} currentWord
 * @return {CompletionItem}
 */
export function getProperties(cssSchema, currentWord: string, useSeparator: boolean): CompletionItem[] {
  if (isClassOrId(currentWord) || isAtRule(currentWord)) return [];

  return cssSchema.data.css.properties.map(property => {
    const completionItem = new CompletionItem(property.name);

    completionItem.insertText = property.name + (useSeparator ? ': ' : ' ');
    completionItem.detail = property.desc;
    completionItem.kind = CompletionItemKind.Property;

    return completionItem;
  });
}

/**
 * Parses a sass file for auto completion
 *
 * @export
 * @param {Uri} fileUri
 * @param {boolean} [isDelete=false]
 * @returns
 */
export function parseFile(fileUri: Uri, isDelete: boolean = false) {
  if (isDelete) {
    removeFile(fileUri);
  } else {
    // Test to see if it matches the pattern
    let patterns = getFilePatterns();
    let include = globToRegExp(patterns.include, { extended: true, flags: 'i' });
    let exclude = globToRegExp(patterns.exclude, { extended: true, flags: 'i' });
    if (!include.test(fileUri.path) || exclude.test(fileUri.path)) { return; }

    workspace.openTextDocument(fileUri).then(document => {
      let content = document.getText();
      // Variables pattern
      let pattern = /((\$.+?):(.+?);?)$/igm;
      let match: string[] = [];
      let file: File = new File;
      file.file = fileUri;
      let lastIndex = 0;
      // Create completion item for each matched variable
      while ((match = pattern.exec(content)) !== null) {
        let label = match[2].trim();
        let value = match[3].trim();
        let completionItem = new CompletionItem(label);
        completionItem.detail = value;
        if (/^(#|rgba?)/i.test(value)) {
          completionItem.kind = CompletionItemKind.Color;
        } else {
          completionItem.kind = CompletionItemKind.Value;
        }
        file.completions.push(new Completion(completionItem, new Range(
          document.positionAt(pattern.lastIndex - match[0].length),
          document.positionAt(pattern.lastIndex - match[0].length + label.length))
        ));
        lastIndex = pattern.lastIndex;
        // file.completion.push(completionItem);
      }
      addFile(fileUri, file);
    });
  }
}

/**
 * Adds a file to the list of autocomlete files
 *
 * @export
 * @param {Uri} fileUri
 * @param {File} file
 */
export function addFile(fileUri: Uri, file: File) {
  let newItem: boolean = true;
  for (let i = 0; i < files.length; i++) {
    if (files[i].file.fsPath == fileUri.fsPath) {
      // files[i].completions = file.completion;
      newItem = false;
      break;
    }
  }
  if (newItem) { files.push(file); }
}

/**
 * Removes a file from the list of autocomplete files
 *
 * @export
 * @param {Uri} fileUri
 */
export function removeFile(fileUri: Uri) {
  for (let i = 0; i < files.length; i++) {
    if (files[i].file.fsPath == fileUri.fsPath) {
      files.splice(i, 1);
      break;
    }
  }
}

/**
 * Rebuilds the workspace files
 *
 * @export
 * @returns {Promise<boolean>}
 */
export function getWorkspaceFiles(): Promise<boolean> {
  files = [];
  return new Promise(resolve => {
    let patterns = getFilePatterns();
    workspace.findFiles(patterns.include, patterns.exclude).then(items => {
      items.forEach(item => {
        parseFile(item, false);
      });
      resolve(true);
    });
  });
}

/**
 * Gets a list of variables from the workspace files
 *
 * @export
 * @returns {CompletionItem[]}
 */
export function getVariables(): CompletionItem[] {
  let variables: CompletionItem[] = [];
  files.forEach(file => {
    file.completions.forEach(comp => { variables.push(comp.item); });
  });
  return variables;
}

/**
 * Gets the file patterns for included/excluded files to parse
 *
 * @export
 * @returns {{ include: string, exclude: string }}
 */
export function getFilePatterns(): { include: string, exclude: string } {
  let pattern = { include: '', exclude: '' };
  pattern.include = '**/*.{sass,scss}';

  if (sassConfig.files && sassConfig.files.length > 0) {
    pattern.include = '{**/' + sassConfig.files.join(',**/') + '}';
  } else if (sassConfig.exclude && sassConfig.exclude.length > 0) {
    pattern.exclude = '{**/' + sassConfig.exclude.join('**,**/') + '**}';
  }
  return pattern;
}

/**
 * Returns values for current property for completion list
 *
 * @param {Object} cssSchema
 * @param {String} currentWord
 * @return {CompletionItem}
 */
export function getValues(cssSchema, currentWord: string): CompletionItem[] {
  const property = getPropertyName(currentWord);
  const values = findPropertySchema(cssSchema, property).values;

  if (!values) return [];

  return values.map(property => {
    const completionItem = new CompletionItem(property.name);

    completionItem.detail = property.desc;
    completionItem.kind = CompletionItemKind.Value;

    return completionItem;
  });
}

/**
 * Loads the sass config file if there is one
 *
 * @export
 * @param {string} [text=null]
 * @returns
 */
export function loadSassConfig(text: string = null) {
  if (workspace.rootPath) {
    try {
      if (text === null) {
        sassConfig = require(workspace.rootPath + '/sassconfig.json');
      } else {
        sassConfig = JSON.parse(text);
      }
    } catch (e) { }
  }
  return sassConfig;
}

export class SassCompletion implements CompletionItemProvider {
  public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): CompletionItem[] {
    const start = new Position(position.line, 0);
    const range = new Range(start, position);
    const currentWord = document.getText(range).trim();
    const text = document.getText();
    const value = isValue(cssSchema, currentWord);
    const config = workspace.getConfiguration('sass-indented');

    let atRules = [],
      properties = [],
      values = [],
      variables = [];

    if (value) {
      values = getValues(cssSchema, currentWord);
    } else {
      atRules = getAtRules(cssSchema, currentWord);
      properties = getProperties(cssSchema, currentWord, config.get('useSeparator', true));
    }
    variables = getVariables();

    const completions = [].concat(
      atRules,
      properties,
      values,
      variables,
      sassSchema
    );

    return completions;
  }
}

export class SassDefinitionProvider implements DefinitionProvider {
  public provideDefinition(document: TextDocument, position: Position, token: CancellationToken): Thenable<Location> {
    return new Promise((resolve, reject) => {
      let wordRange: Range = document.getWordRangeAtPosition(position);
      let word: string = document.getText(wordRange);
      commands.executeCommand('vscode.executeWorkspaceSymbolProvider', word).then((items: Array<SymbolInformation>) => {
        var locations: Location[] = [];
        items.forEach(item => {
          locations.push(item.location);
        });
        resolve(locations);
      });
    });
  }
}

export class SassWorkspaceSymbolProvider implements WorkspaceSymbolProvider {
  public provideWorkspaceSymbols(query: string, token: CancellationToken): Thenable<SymbolInformation[]> {
    return new Promise((resolve, reject) => {
      let results: SymbolInformation[] = [];
      files.forEach(file => {
        file.completions.forEach(item => {
          if (item.item.label == query) {
            results.push(new SymbolInformation(query, SymbolKind.Field, item.range, file.file));
          }
        });
      });
      resolve(results);
    });
  }
}

class File {
  public completions: Completion[] = [];
  public file: Uri;
}

class Completion {
  public item: CompletionItem;
  public range: Range = new Range(new Position(0, 0), new Position(0, 0));

  public constructor(item: CompletionItem, range: Range) {
    this.item = item;
    this.range = range;
  }
}

export default SassCompletion;
