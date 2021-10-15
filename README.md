# PostCSS Space

[![Build Status](https://app.travis-ci.com/italodr/postcss-space.svg?branch=main)](https://app.travis-ci.com/github/italodr/postcss-space) [![GitHub version](https://badge.fury.io/gh/italodr%2Fpostcss-space.svg)](https://badge.fury.io/gh/italodr%2Fpostcss-space)

Maintain a consistent space throughout your project

Before:

```css
.foo {
  height: space(20);
  margin: space() space(2);
}
```

After:

```css
.foo {
  height: 160px;
  margin: 8px 16px;
}
```

## Usage

No options:

```js
postcss([ require('postcss-space') ])
```

With options:

```js
postcss([ require('postcss-space') ])
    ({
        base: 4,
        unit: 'rem'
    })
```

With CSS variables options:

```css
:root {
  --space-base: 0.5;
  --space-unit: rem;
}
```

```js
postcss([ require('postcss-space') ])
```

Fallback options:

```js
{
    base: 8,
    unit: 'px'
}
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
