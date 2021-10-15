'use strict';

const postcss = require('postcss');
const plugin = require('.');

function run(input, output, opts) {
  let result = postcss([plugin(opts)]).process(input, { from: undefined });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

it('single value case', () => {
  return run('div{height: space(2)}', 'div{height: 16px}', {});
});

it('single unitless case', () => {
  return run('div{height: space()}', 'div{height: 8px}', {});
});

it('multiple value case', () => {
  return run(
    'div{padding: space(1) space(2); display: flex}',
    'div{padding: 8px 16px; display: flex}',
    {}
  );
});

it('with unit params', () => {
  return run('div{margin: space()}', 'div{margin: 8rem}', {
    unit: 'rem'
  });
});

it('with base & unit params', () => {
  return run('div{margin: space(2)}', 'div{margin: 1rem}', {
    unit: 'rem',
    base: 0.5
  });
});

it('with :root based params', () => {
  return run(
    ':root{--space-unit:rem;--space-base:1;}div{margin: space(2)}',
    ':root{--space-unit:rem;--space-base:1;}div{margin: 2rem}',
    {}
  );
});
