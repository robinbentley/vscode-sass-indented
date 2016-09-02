'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SassCompletion from './sassAutocomplete';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.languages.setLanguageConfiguration('sass-indented', {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([$@#!.:]?[\w-?]+%?)|[$@#!.]/g
  });

  const sassCompletion = new SassCompletion();
  const sassCompletionRegister =
    vscode.languages.registerCompletionItemProvider('sass-indented', sassCompletion, '\\.', '-', '$', '@');

  context.subscriptions.push(sassCompletionRegister);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
