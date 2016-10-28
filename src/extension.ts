'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SassCompletion from './sassAutocomplete';
import {SassDefinitionProvider, SassWorkspaceSymbolProvider} from './sassAutocomplete';
import {getWorkspaceFiles, parseFile, loadSassConfig, getFilePatterns} from './sassAutocomplete';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let docFilter: vscode.DocumentFilter = { pattern: '**/*.{sass,scss}' };
  vscode.languages.setLanguageConfiguration('sass', {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([$@#!.:]?[\w-?]+%?)|[$@#!.]/g
  });

  loadSassConfig();
  getWorkspaceFiles();
  const sassCompletionRegister = vscode.languages.registerCompletionItemProvider(docFilter, new SassCompletion, '\\.', '@', '$');
  const sassWorkspaceSymbolRegister = vscode.languages.registerWorkspaceSymbolProvider(new SassWorkspaceSymbolProvider);
  const sassDefinitionRegister = vscode.languages.registerDefinitionProvider(docFilter, new SassDefinitionProvider);

  context.subscriptions.push(sassCompletionRegister);
  context.subscriptions.push(sassWorkspaceSymbolRegister);
  context.subscriptions.push(sassDefinitionRegister);

  // Watch for file changes
  var fsw: vscode.FileSystemWatcher = vscode.workspace.createFileSystemWatcher('{**/*.sass,**/*.scss,' + vscode.workspace.rootPath + '/sassconfig.json}');
  fsw.onDidChange(file => { fswParse(file); });
  fsw.onDidDelete(file => { fswParse(file, true); });
  fsw.onDidCreate(file => { fswParse(file); });
}

function fswParse(file: vscode.Uri, isDelete: boolean = false) {
  if (!isDelete) {
    vscode.workspace.openTextDocument(file).then(document => {
      if (!['sass', 'scss', 'json'].indexOf(document.languageId)) { return; }
      if (document.languageId == 'json') {
        loadSassConfig(document.getText());
        getWorkspaceFiles();
      } else {
        parseFile(file, isDelete);
      }
    });
  } else {
    parseFile(file, isDelete);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
