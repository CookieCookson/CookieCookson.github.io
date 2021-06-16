import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

// https://stenciljs.com/docs/config

export const config: Config = {
  taskQueue: 'async',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/style.scss'],
    }),
    inlineSvg(),
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://cookie.dev/',
      prerenderConfig: './prerender.config.ts',
      serviceWorker: null,
      copy: [
        {
          src: 'CNAME',
        },
      ],
    },
  ],
};
