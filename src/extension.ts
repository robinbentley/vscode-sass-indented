'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import SassCompletion from './sassAutocomplete';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  setSassLanguageConfiguration();

  const sassCompletion = new SassCompletion(context);
  const sassCompletionRegister = vscode.languages.registerCompletionItemProvider(
    [{ language: 'sass', scheme: 'file' }, { language: 'sass', scheme: 'untitled' }],
    sassCompletion,
    '\\.',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '@'
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((config: vscode.ConfigurationChangeEvent) => {
      if (config.affectsConfiguration('sass')) {
        setSassLanguageConfiguration();
      }
    })
  );
  context.subscriptions.push(sassCompletionRegister);
}

function setSassLanguageConfiguration() {
  const disableAutoIndent: boolean = vscode.workspace.getConfiguration('sass').get('disableAutoIndent');

  vscode.languages.setLanguageConfiguration('sass', {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([$@#!.:]?[\w-?]+%?)|[$@#!.]/g,
    onEnterRules: [
      {
        beforeText: /^((?!^(\/n|\s+|.*: .*|.*@.*|.*,|\s+\+.*)$).*|.*@media(?!^\s+$).*)$/,
        action: {
          indentAction: disableAutoIndent ? vscode.IndentAction.None : vscode.IndentAction.Indent
        }
      }
    ]
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
