# Indented Sass syntax highlighting, autocomplete & snippets for VSCode
VSCode only has built in support for SCSS syntax so I have put this together for people who use the indented syntax.

![Highlighting Example](https://raw.githubusercontent.com/robinbentley/vscode-sass-indented/master/images/screenshot.png)

## Installing
Search for Sass from the extension installer within VSCode or put this into the command palette
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
If anyone feels that there is something missing or can suggest improvements please [open a new issue](https://github.com/robinbentley/vscode-sass-indented/issues) or better yet send a pull request! Clone this repo and follow the instructions for running/debugging extensions locally [here](https://code.visualstudio.com/docs/extensions/overview)

## Credits 
Property/Value Autocompletion - [Stanislav Sysoev (@d4rkr00t)](https://github.com/d4rkr00t) for his work on [language-stylus](https://github.com/d4rkr00t/language-stylus) extension   
Syntax highlighing - [https://github.com/P233/Syntax-highlighting-for-Sass](https://github.com/P233/Syntax-highlighting-for-Sass)   
Sass seal logo - [http://sass-lang.com/styleguide/brand](http://sass-lang.com/styleguide/brand)   

## Changelog
1.4.0 - Add comment param highlighing. Fix adjoined id highlighing    
1.3.1 - Remove association with `.scss` files   
1.3.0 - Revert to 1.1.0 functionality whilst performance issues are resolved   
1.2.1 - Add color preview to variable completion   
1.2.0 - Add global variable autocompletion   
1.1.0 - Rename sass-intended -> sass   
1.0.0 - Add property/value autocompletion   
0.1.0 - Initial Release   

## License
[MIT - https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
