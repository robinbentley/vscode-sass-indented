[![](https://vsmarketplacebadge.apphb.com/version-short/robinbentley.sass-indented.svg)](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
[![](https://vsmarketplacebadge.apphb.com/installs-short/robinbentley.sass-indented.svg)](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
[![](https://vsmarketplacebadge.apphb.com/rating-short/robinbentley.sass-indented.svg)](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
[![GitHub stars](https://img.shields.io/github/stars/robinbentley/vscode-sass-indented.svg?style=social&label=Star%20on%20Github)](https://github.com/robinbentley/vscode-sass-indented)

# Indented Sass syntax highlighting, autocomplete & snippets for VSCode
VSCode only has built in support for SCSS syntax so I have put this together for people who prefer to use the indented syntax.

![Highlighting Example](https://raw.githubusercontent.com/robinbentley/vscode-sass-indented/master/images/screenshot.png)

## Installing
Search for Sass from the extension installer within VSCode or put this into the command palette.
```
ext install sass-indented
```

## Property/Value Autocompletion & Emmet
Autocompletion for css properties and built in language functions _(@warn, @at-root, lighten(), darken() etc)_ is built in. As of version 1.3 VSCode supports Emmet in .sass files, the original snippets for css properties have been removed.

## Snippets
Snippets have been reduced to a few time savers.

`var` - declare a new variable   
`mixin` - declare a new mixin   
`if` - base for an @if statement   
`for` - base for a @for loop   
`each` - base for a @each loop   
`while` - base for a @while loop   

## Contributing
The source for this extension is available on [github](https://github.com/robinbentley/vscode-sass-indented). If anyone feels that there is something missing or would like to suggest improvements please [open a new issue](https://github.com/robinbentley/vscode-sass-indented/issues) or send a pull request! Instructions for running/debugging extensions locally [here](https://code.visualstudio.com/docs/extensions/overview).

## Credits
- Property/Value Autocompletion - [Stanislav Sysoev (@d4rkr00t)](https://github.com/d4rkr00t) for his work on [language-stylus](https://github.com/d4rkr00t/language-stylus) extension
- Syntax highlighing - [https://github.com/P233/Syntax-highlighting-for-Sass](https://github.com/P233/Syntax-highlighting-for-Sass)
- Sass seal logo - [http://sass-lang.com/styleguide/brand](http://sass-lang.com/styleguide/brand)

## Changelog
The full changelog is available here: [changelog](CHANGELOG.md).

## License
[MIT - https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
