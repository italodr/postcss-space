'use strict';

module.exports = (opts = {}) => {
  const regex = new RegExp(/space\((\d)\)/);

  let unit = opts.unit || 'px';
  let base = opts.base || 8;

  return {
    postcssPlugin: 'postcss-space',
    Once(root, { result }) {
      root.walkDecls((decl) => {
        if (!decl.value) return;

        if (decl.parent.selector === ':root') {
          if (decl.prop === '--space-base') {
            base = decl.value;
          }

          if (decl.prop === '--space-unit') {
            unit = decl.value;
          }
        }

        if (decl.value.indexOf('space(') === -1) return;

        decl.value = decl.value
          .split(' ')
          .reduce((s, c) => {
            const value = c.match(regex)?.[1] || 1;
            return `${s}${parseFloat((value * base).toFixed(5))}${unit} `;
          }, '')
          .trim();
      });
    }
  };
};

module.exports.postcss = true;
