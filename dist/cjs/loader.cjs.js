'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ded459cd.js');

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-child-component_2.cjs",[[1,"my-component"],[1,"my-child-component"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
