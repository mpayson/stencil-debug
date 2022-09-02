import { p as promiseResolve, b as bootstrapLazy } from './index-e9b87372.js';

/*
 Stencil Client Patch Esm v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-child-component_2",[[1,"my-component"],[1,"my-child-component"]]]], options);
  });
};

export { defineCustomElements };
