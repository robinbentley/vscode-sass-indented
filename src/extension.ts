'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SassCompletion from './sassAutocomplete';
import {getVariables} from './sassAutocomplete';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let docFilter: vscode.DocumentFilter = { pattern: '**/*.{sass,scss}' };
  vscode.languages.setLanguageConfiguration('sass', {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([$@#!.:]?[\w-?]+%?)|[$@#!.]/g
  });

  getVariables();
  const sassCompletion = new SassCompletion();
  const sassCompletionRegister =
    vscode.languages.registerCompletionItemProvider(docFilter, sassCompletion, '\\.', '@', '$');

  context.subscriptions.push(sassCompletionRegister);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
