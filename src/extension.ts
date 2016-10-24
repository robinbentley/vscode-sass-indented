'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SassCompletion from './sassAutocomplete';
import {getWorkspaceFiles, parseFile} from './sassAutocomplete';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let docFilter: vscode.DocumentFilter = { pattern: '**/*.{sass,scss}' };
  vscode.languages.setLanguageConfiguration('sass', {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([$@#!.:]?[\w-?]+%?)|[$@#!.]/g
  });

  getWorkspaceFiles();
  const sassCompletion = new SassCompletion();
  const sassCompletionRegister =
    vscode.languages.registerCompletionItemProvider(docFilter, sassCompletion, '\\.', '@', '$');

  context.subscriptions.push(sassCompletionRegister);

  // Watch for file changes
  var fsw: vscode.FileSystemWatcher = vscode.workspace.createFileSystemWatcher('{**/*.sass,**/*.scss}');
  fsw.onDidChange(file => { fswParse(file); });
  fsw.onDidDelete(file => { fswParse(file, true); });
  fsw.onDidCreate(file => { fswParse(file); });

}

function fswParse(file: vscode.Uri, isDelete: boolean = false) {
  if (!isDelete) {
    vscode.workspace.openTextDocument(file).then(document => {
      if (!['sass', 'scss'].indexOf(document.languageId)) return;
      parseFile(file, isDelete);
    });
  } else {
    parseFile(file, isDelete);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {
}
