# Indented Sass syntax highlighting, autocomplete & snippets for VSCode
VSCode only has built in support for SCSS syntax so I have put this together for people who use the indented syntax.
~~When opening a .sass file the syntax should set to _Sass (Indented)_, using just _Sass_ clashes with the built in support unfortunately (Which should be Scss IMO)~~

**As of 1.3 the built in support has been renamed from ```sass``` to ```scss``` meaning I have been able to drop (indented) from the language name. The extension now requires a minimum VSCode version 1.4. If you have any issues please update your VSCode first.**

![Highlighting Example](https://raw.githubusercontent.com/robinbentley/vscode-sass-indented/master/images/screenshot.png)

### Installing
Search for Sass from the extension installer within VSCode

### Autocompletion & Emmet
Autocompletion for css properties and built in language functions _(@warn, @at-root, lighten(), darken() etc)_ is now built in. As of version 1.3 VSCode supports Emmet in .sass files, the original snippets for css properties have been removed.

### Snippets
Snippets have been reduced to a few time savers.

```var``` - declare a new variable   
```mixin``` - declare a new mixin   
```if``` - base for an @if statement   
```for``` - base for a @for loop   
```each``` - base for a @each loop   
```while``` - base for a @while loop   

### Contributing
If anyone feels that there is something missing or can suggest improvements please [open a new issue](https://github.com/robinbentley/vscode-sass-indented/issues) or better yet send a pull request! Clone this repo and follow the instructions for running/debugging extensions locally [here](https://code.visualstudio.com/docs/extensions/overview)

### Credits
Autocompletion - credit to [Stanislav Sysoev (@d4rkr00t)](https://github.com/d4rkr00t) for this work on [language-stylus](https://github.com/d4rkr00t/language-stylus) extension   
Syntax highlighing - credit to [https://github.com/P233/Syntax-highlighting-for-Sass](https://github.com/P233/Syntax-highlighting-for-Sass)   
Sass seal logo - credit to [http://sass-lang.com/styleguide/brand](http://sass-lang.com/styleguide/brand)

### License
[MIT - https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
