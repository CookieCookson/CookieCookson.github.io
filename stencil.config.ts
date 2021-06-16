import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  taskQueue: 'async',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/style.scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://www.cookie.dev/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null,
    },
  ],
};
