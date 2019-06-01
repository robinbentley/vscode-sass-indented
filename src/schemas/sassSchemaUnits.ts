const sassSchemaUnits = [
  {
    name: 's',
    body: '$1s',
    description: '($value) - Time unit (seconds)'
  },
  {
    name: 'ms',
    body: '$1ms',
    description: '($value) - Time unit (miliseconds)'
  },
  // descriptions are from https://www.tutorialspoint.com/css/css_measurement_units.htm
  {
    name: '%',
    body: '$1%',
    description:
      '($value) - Defines a measurement as a percentage relative to another value, typically an enclosing element.'
  },
  {
    name: 'cm',
    body: '$1cm',
    description: '($value) - Defines a measurement in centimeters.'
  },
  {
    name: 'em',
    body: '$1em',
    description:
      '($value) - A relative measurement for the height of a font in em spaces. Because an em unit is equivalent to the size of a given font, if you assign a font to 12pt, each "em" unit would be 12pt; thus, 2em would be 24pt.'
  },
  {
    name: 'ex',
    body: '$1ex',
    description:
      "($value) - This value defines a measurement relative to a font's x-height. The x-height is determined by the height of the font's lowercase letter x."
  },
  {
    name: 'in',
    body: '$1in',
    description: '($value) - Defines a measurement in inches.'
  },
  {
    name: 'mm',
    body: '$1mm',
    description: '($value) - Defines a measurement in millimeters.'
  },
  {
    name: 'pc',
    body: '$1pc',
    description:
      '($value) - 	Defines a measurement in picas. A pica is equivalent to 12 points; thus, there are 6 picas per inch.'
  },
  {
    name: 'pt',
    body: '$1pt',
    description: '($value) - Defines a measurement in points. A point is defined as 1/72nd of an inch.'
  },
  {
    name: 'px',
    body: '$1px',
    description: '($value) - Defines a measurement in screen pixels.'
  },
  // descriptions from : https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units
  {
    name: 'ch',
    body: '$1ch',
    description:
      '($value) - Average character advance of a narrow glyph in the element’s font, as represented by the “0” (ZERO, U+0030) glyph.'
  },
  /* 
    name: '$ic',
    body: '$1ic',
    description: '($value) - Average character advance of a full width glyph in the element’s font, as represented by the “水” (CJK water ideograph, U+6C34) glyph.'
  },
  {
    name: '$cap',
    body: '$1cap',
    description: '($value) - 	Cap height (the nominal height of capital letters) of the element\'s font.'
  },
  {
    name: '$lh',
    body: '$1lh',
    description: '($value) - 	Line height of the element.'
  },
  {
    name: '$rlh',
    body: '$1rlh',
    description: '($value) - 	Line height of the root element.'
  }, */
  // descriptions from : https://www.w3schools.com/cssref/css_units.asp
  {
    name: 'rem',
    body: '$1rem',
    description: '($value) - Relative to font-size of the root element'
  },
  {
    name: 'vw',
    body: '$1vw',
    description:
      '($value) - 1% of the width of the viewport, Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.'
  },
  {
    name: 'vh',
    body: '$1vh',
    description:
      '($value) - 1% of the height of the viewport, Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.'
  },
  {
    name: 'vmin',
    body: '$1vmin',
    description:
      "($value) - 	1% of viewport's smaller dimension Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm."
  },
  {
    name: 'vmax',
    body: '$1vmax',
    description:
      "($value) - 	1% of viewport's larger dimension Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm."
  },
  // descriptions from : https://alligator.io/css/css-grid-layout-fr-unit/
  {
    name: 'fr',
    body: '$1fr',
    description: '($value) - Fractional unit, 1fr is for 1 part of the available space'
  }
];

export default sassSchemaUnits;
