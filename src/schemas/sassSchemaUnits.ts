const sassSchemaUnits = [
  {
    name: 's',
    body: 's',
    description: 'Time unit (seconds)'
  },
  {
    name: 'ms',
    body: 'ms',
    description: 'Time unit (miliseconds)'
  },
  // descriptions are from https://www.tutorialspoint.com/css/css_measurement_units.htm
  {
    name: '%',
    body: '%',
    description:
      'Defines a measurement as a percentage relative to another value, typically an enclosing element.'
  },
  {
    name: 'cm',
    body: 'cm',
    description: 'Defines a measurement in centimeters.'
  },
  {
    name: 'em',
    body: 'em',
    description:
      'A relative measurement for the height of a font in em spaces. Because an em unit is equivalent to the size of a given font, if you assign a font to 12pt, each "em" unit would be 12pt; thus, 2em would be 24pt.'
  },
  {
    name: 'ex',
    body: 'ex',
    description:
      "This value defines a measurement relative to a font's x-height. The x-height is determined by the height of the font's lowercase letter x."
  },
  {
    name: 'in',
    body: 'in',
    description: 'Defines a measurement in inches.'
  },
  {
    name: 'mm',
    body: 'mm',
    description: 'Defines a measurement in millimeters.'
  },
  {
    name: 'pc',
    body: 'pc',
    description:
      '	Defines a measurement in picas. A pica is equivalent to 12 points; thus, there are 6 picas per inch.'
  },
  {
    name: 'pt',
    body: 'pt',
    description: 'Defines a measurement in points. A point is defined as 1/72nd of an inch.'
  },
  {
    name: 'px',
    body: 'px',
    description: 'Defines a measurement in screen pixels.'
  },
  // descriptions from : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units
  {
    name: 'ch',
    body: 'ch',
    description:
      'Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.'
  },
  /* 
    name: '$ic',
    body: 'ic',
    description: 'Average character advance of a full width glyph in the element’s font, as represented by the “水” (CJK water ideograph, U+6C34) glyph.'
  },
  {
    name: '$cap',
    body: 'cap',
    description: '	Cap height (the nominal height of capital letters) of the element\'s font.'
  },
  {
    name: '$lh',
    body: 'lh',
    description: '	Line height of the element.'
  },
  {
    name: '$rlh',
    body: 'rlh',
    description: '	Line height of the root element.'
  }, */
  // descriptions from : https://www.w3schools.com/cssref/css_units.asp
  {
    name: 'rem',
    body: 'rem',
    description: 'Relative to font-size of the root element'
  },
  {
    name: 'vw',
    body: 'vw',
    description:
      '1% of the width of the viewport, Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.'
  },
  {
    name: 'vh',
    body: 'vh',
    description:
      '1% of the height of the viewport, Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.'
  },
  {
    name: 'vmin',
    body: 'vmin',
    description:
      "	1% of viewport's smaller dimension Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm."
  },
  {
    name: 'vmax',
    body: 'vmax',
    description:
      "	1% of viewport's larger dimension Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm."
  },
  // descriptions from : https://alligator.io/css/css-grid-layout-fr-unit/
  {
    name: 'fr',
    body: 'fr',
    description: 'Fractional unit, 1fr is for 1 part of the available space'
  }
];

export default sassSchemaUnits;
