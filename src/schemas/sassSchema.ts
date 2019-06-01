import { CompletionItem, CompletionItemKind, SnippetString } from 'vscode';

const sassSchema = [
  {
    name: '@debug',
    body: '@debug ',
    description: 'Prints the value to the standard error output stream'
  },
  {
    name: '@error',
    body: '@error ',
    description: 'Throws the value as a fatal error'
  },
  {
    name: '@extend',
    body: '@extend ',
    description: 'Inherit the styles of another selector'
  },
  {
    name: '@warn',
    body: '@warn ',
    description: 'Prints the value to the standard error output stream'
  },
  {
    name: '@at-root',
    body: '@at-root ',
    description: 'Causes one or more rules to be emitted at the root of the document'
  },
  {
    name: '@if',
    body: '@if ',
    description: '@if statement (e.g @if 1 + 1 == 2)'
  },
  {
    name: '@for',
    body: '@for ',
    description: '@for loop'
  },
  {
    name: '@each',
    body: '@each ',
    description: '@each loop'
  },
  {
    name: '@while',
    body: '@while ',
    description: '@while loop'
  },
  {
    name: 'rgb()',
    body: 'rgb($1, $2, $3)$0',
    description: 'rgb($red, $green, $blue) - Creates a color from red, green, and blue values.'
  },
  {
    name: 'rgba()',
    body: 'rgba($1, $2, $3, $4)$0',
    description: 'rgba($red, $green, $blue, $alpha) - Creates a color from red, green, blue and alpha values.'
  },
  {
    name: 'red()',
    body: 'red($1)',
    description: 'red($color) - Gets the red component of a color.'
  },
  {
    name: 'green()',
    body: 'green($1)',
    description: 'green($color) - Gets the green component of a color.'
  },
  {
    name: 'blue()',
    body: 'blue($1)',
    description: 'blue($color) - Gets the blue component of a color.'
  },

  {
    name: 'hsl()',
    body: 'hsl($1, $2, $3)$0',
    description: 'hsl($hue, $saturation, $lightness) - Creates a color from hue, saturation, and lightness values.'
  },
  {
    name: 'hsla()',
    body: 'hsla($1, $2, $3, $4)$0',
    description:
      'hsl($hue, $saturation, $lightness, $alpha) - Creates a color from hue, saturation, lightness and alpha values.'
  },
  {
    name: 'hue()',
    body: 'hue($1, $2, $3)$0',
    description: 'hue($color) - Gets the hue component of a color.'
  },
  {
    name: 'saturation()',
    body: 'saturation($1)',
    description: 'saturation($color) - Gets the saturation component of a color.'
  },
  {
    name: 'lightness()',
    body: 'lightness($1)',
    description: 'lightness($color) - Gets the lightness component of a color.'
  },
  {
    name: 'adjust-hue()',
    body: 'adjust-hue($1, $2)$0',
    description: 'adjust-hue($color, $degrees) - Changes the hue of a color.'
  },
  {
    name: 'lighten()',
    body: 'lighten($1, $2)',
    description: 'lighten($color, $amount) - Makes a color lighter.'
  },
  {
    name: 'darken()',
    body: 'darken($1, $2)',
    description: 'darken($color, $amount) - Makes a color darker.'
  },
  {
    name: 'saturate()',
    body: 'saturate($1, $2)',
    description: 'saturate($color, $amount) - Makes a color more saturated.'
  },
  {
    name: 'desaturate()',
    body: 'desaturate($1, $2)',
    description: 'desaturate($color, $amount) - Makes a color less saturated.'
  },
  {
    name: 'greyscale()',
    body: 'greyscale($1)',
    description: 'greyscale($color) - Converts a color to grayscale.'
  },
  {
    name: 'complement()',
    body: 'complement($1)',
    description: 'complement($color) - Returns the complement of a color.'
  },
  {
    name: 'invert()',
    body: 'invert($1)',
    description: 'invert($color) - Returns the inverse of a color.'
  },
  {
    name: 'alpha()',
    body: 'alpha($1)',
    description: 'alpha($color) - Gets the alpha component (opacity) of a color.'
  },
  {
    name: 'opacify()',
    body: 'opacify($1, $2)',
    description: 'opacify($color, $amount) - Makes a color more opaque.'
  },
  {
    name: 'fade-in()',
    body: 'fade-in($1, $2)',
    description: 'fade-in($color, $amount) - Makes a color more opaque.'
  },
  {
    name: 'transparentize()',
    body: 'transparentize($1, $2)',
    description: 'transparentize($color, $amount) - Makes a color more transparent.'
  },
  {
    name: 'fade-out()',
    body: 'fade-out($1, $2)',
    description: 'fade-out($color, $amount) - Makes a color more transparent.'
  },
  {
    name: 'adjust-color()',
    body: 'adjust-color($1, $2, $3, $4, $5, $6, $7, $8)',
    description:
      'adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha]) - Increases or decreases one or more components of a color.'
  },
  {
    name: 'scale-color()',
    body: 'scale-color($1, $2, $3, $4, $5, $6, $7)',
    description:
      'scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha]) - Fluidly scales one or more properties of a color.'
  },
  {
    name: 'change-color()',
    body: 'change-color($1, $2, $3, $4, $5, $6, $7)',
    description:
      'change-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha]) - Changes one or more properties of a color.'
  },
  {
    name: 'ie-hex-str()',
    body: 'ie-hex-str($1)',
    description: 'ie-hex-str($color) - Converts a color into the format understood by IE filters.'
  },
  {
    name: 'unquote()',
    body: 'unquote($1)',
    description: 'unquote($string) - Removes quotes from a string.'
  },
  {
    name: 'quote()',
    body: 'quote($1)',
    description: 'quote($string) - Adds quotes to a string.'
  },
  {
    name: 'str-length()',
    body: 'str-length($1)',
    description: 'str-length($string) - Returns the number of characters in a string.'
  },
  {
    name: 'str-insert()',
    body: 'str-insert($1, $2, $3)',
    description: 'str-insert($string, $insert, $index) - Inserts $insert into $string at $index.'
  },
  {
    name: 'str-index()',
    body: "str-index('$1', $2)",
    description: 'str-index($string, $substring) - Returns the index of the first occurrence of $substring in $string.'
  },
  {
    name: 'str-slice()',
    body: 'str-slice($1, $2, $3)',
    description: 'str-slice($string, $start-at, $end-at) - Extracts a substring from $string.'
  },
  {
    name: 'to-upper-case()',
    body: "to-upper-case('$1')",
    description: 'to-upper-case($string) - Converts a string to upper case.'
  },
  {
    name: 'to-lower-case()',
    body: "to-lower-case('$1')",
    description: 'to-lower-case($string) - Converts a string to lower case.'
  },
  {
    name: 'percentage()',
    body: 'percentage($1)',
    description: 'percentage($number) - Converts a unitless number to a percentage.'
  },
  {
    name: 'round()',
    body: 'round($1)',
    description: 'round($number) - Rounds a number to the nearest whole number.'
  },
  {
    name: 'ceil()',
    body: 'ceil($1)',
    description: 'ceil($number) - Rounds a number up to the next whole number.'
  },
  {
    name: 'floor()',
    body: 'floor($1)',
    description: 'floor($number) - Rounds a number down to the next whole number.'
  },
  {
    name: 'abs()',
    body: 'abs($1)',
    description: 'abs($number) - Returns the absolute value of a number.'
  },
  {
    name: 'min()',
    body: 'min($1)',
    description: 'min($numbers...) - Finds the minimum of several numbers.'
  },
  {
    name: 'max()',
    body: 'max($1)',
    description: 'max($numbers...) - Finds the maximum of several numbers.'
  },
  {
    name: 'random()',
    body: 'random($1)',
    description: 'random([$limit]) - Returns a random number.'
  },
  {
    name: 'length()',
    body: 'length($1)',
    description: 'length($list) - Returns the length of a list.'
  },
  {
    name: 'nth()',
    body: 'nth($1)',
    description: 'nth($list, $n) - Returns a specific item in a list.'
  },
  {
    name: 'set-nth()',
    body: 'set-nth($1, $2, $3)',
    description: 'set-nth($list, $n, $value) - Replaces the nth item in a list.'
  },
  {
    name: 'join()',
    body: 'join($1, $2, $3)',
    description: 'join($list1, $list2, [$separator]) - Joins together two lists into one.'
  },
  {
    name: 'append()',
    body: 'append($1, $2, $3)',
    description: 'append($list, $value, [$separator]) - Appends a single value onto the end of a list.'
  },
  {
    name: 'zip()',
    body: 'zip($1)',
    description: 'zip($lists...) - Combines several lists into a single multidimensional list.'
  },
  {
    name: 'index()',
    body: 'index($1, $2)',
    description: 'index($list, $value) - Returns the position of a value within a list.'
  },
  {
    name: 'list-separator()',
    body: 'list-separator($1)',
    description: 'list-separator($list) - Returns the separator of a list.'
  },
  {
    name: 'map-get()',
    body: 'map-get($1, $2)',
    description: 'map-get($map, $key) - Returns the value in a map associated with a given key.'
  },
  {
    name: 'map-merge()',
    body: 'map-merge($1, $2)',
    description: 'map-merge($map1, $map2) - Merges two maps together into a new map.'
  },
  {
    name: 'map-remove()',
    body: 'map-remove($1, $2)',
    description: 'map-remove($map, $keys...) - Returns a new map with keys removed.'
  },
  {
    name: 'map-keys()',
    body: 'map-keys($1)',
    description: 'map-keys($map) - Returns a list of all keys in a map.'
  },
  {
    name: 'map-values()',
    body: 'map-values($1)',
    description: 'map-values($map) - Returns a list of all values in a map.'
  },
  {
    name: 'map-has-key()',
    body: 'map-has-key($1, $2)',
    description: 'map-has-key($map, $key) - Returns whether a map has a value associated with a given key.'
  },
  {
    name: 'keywords()',
    body: 'keywords($1)',
    description: 'keywords($args) - Returns the keywords passed to a function that takes variable arguments.'
  }
];

export default sassSchema.map(item => {
  const completionItem = new CompletionItem(item.name);
  completionItem.insertText = new SnippetString(item.body);
  completionItem.detail = item.description;
  completionItem.kind = CompletionItemKind.Function;

  return completionItem;
});
