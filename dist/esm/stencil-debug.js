import { p as promiseResolve, b as bootstrapLazy } from './index-e9b87372.js';

/*
 Stencil Client Patch Browser v2.17.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-child-component_2",[[1,"my-component"],[1,"my-child-component"]]]], options);
});
