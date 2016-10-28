# Indented Sass syntax highlighting, autocomplete & snippets for VSCode
VSCode only has built in support for SCSS syntax so I have put this together for people who use the indented syntax.

**v1.2.0 adds [Global Variable Autocompletion](#global-variable-completion)** please read this section for details

![Highlighting Example](https://raw.githubusercontent.com/robinbentley/vscode-sass-indented/master/images/screenshot.png)

### Installing
Search for Sass from the extension installer within VSCode or put this into the command palette
```
ext install sass-indented
```

### Global Variable Autocompletion
With thanks to [Ryan Naddy (@TheColorRed)](https://github.com/TheColorRed) auto completion for variables will now be available across your whole project including `ctrl-click` & `F12` to go to the definition.

A `sassconfig.json` file can be added to the root of the project to control what's available for autocompletion. The config file **is not required** but if you do notice you are getting completions you don't want or need there is the option to fine tune for that project. By default `node_modules` and `bower_components` are excluded.

The config file has two options

`files` a list of specific files/directories to include, if files is set everything else is excluded and `excludes` is ignored.
```json
// include all .sass & .scss files in the sass dir and only plugin.sass from a plugin dir 
"files": [
  "path/to/sass/**",
  "path/to/plugin/plugin.sass"
]
```

`exclude` a list of files/directories to exclude. If excludes is set and you don't want completions from `node_modules` or `bower_components` they must be added back into the exclude list
```json
// exclude any .sass or .scss files in wp-admin/, node_modules/ and bower_components/ 
"exclude": [
  "wp-admin",
  "node_modules",
  "bower_components"
]
```


### Property/Value Autocompletion & Emmet
Autocompletion for css properties and built in language functions _(@warn, @at-root, lighten(), darken() etc)_ is built in. As of version 1.3 VSCode supports Emmet in .sass files, the original snippets for css properties have been removed.

### Snippets
Snippets have been reduced to a few time savers.

`var` - declare a new variable   
`mixin` - declare a new mixin   
`if` - base for an @if statement   
`for` - base for a @for loop   
`each` - base for a @each loop   
`while` - base for a @while loop   

### Contributing
If anyone feels that there is something missing or can suggest improvements please [open a new issue](https://github.com/robinbentley/vscode-sass-indented/issues) or better yet send a pull request! Clone this repo and follow the instructions for running/debugging extensions locally [here](https://code.visualstudio.com/docs/extensions/overview)

### Credits
Global Variable Autocompletion - [Ryan Naddy (@TheColorRed)](https://github.com/TheColorRed)   
Property/Value Autocompletion - [Stanislav Sysoev (@d4rkr00t)](https://github.com/d4rkr00t) for his work on [language-stylus](https://github.com/d4rkr00t/language-stylus) extension   
Syntax highlighing - [https://github.com/P233/Syntax-highlighting-for-Sass](https://github.com/P233/Syntax-highlighting-for-Sass)   
Sass seal logo - [http://sass-lang.com/styleguide/brand](http://sass-lang.com/styleguide/brand)   

### License
[MIT - https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
