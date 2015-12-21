# Indented Sass syntax support for VSCode
VSCode only has built in support for SCSS syntax so I have put this together for people who use the indented syntax.
When opening a .sass file the syntax should set to Sass (Indented), using just Sass clashes with the built in support (Which should be Scss IMO)

Syntax highlighing is credit to [https://github.com/nathos/sass-textmate-bundle](https://github.com/nathos/sass-textmate-bundle)
Sass seal logo is credit to [http://sass-lang.com/styleguide/brand](http://sass-lang.com/styleguide/brand)

![Highlighting Example](https://raw.githubusercontent.com/robinbentley/vscode-sass-indented/master/images/screenshot.png)

## Installing
Search for Sass from the extension installer within VSCode

## Snippets
These snippets are emmet-esque, I'm not sure how to plug into the built in emmet to use the library for this version of the sass syntax. If that's something someone can help with that would be appricated.
At the moment they just have completion for all the standard CSS selectors. If there is no way to replace them with the built in emmet then I will write a full reference and improve them (e.g adding properties to selectors).

## Contributing
If anyone feels that there is something missing or can make something better please send me a pull request! Clone this repo and follow the instructions for running/debugging extensions locally here [https://code.visualstudio.com/docs/extensions/overview](https://code.visualstudio.com/docs/extensions/overview)

## License
[MIT - https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)
