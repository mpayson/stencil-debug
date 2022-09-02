import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-debug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      autoDefineCustomElements: true
    },
    {
      type: 'docs-readme',
    }
  ],
};
