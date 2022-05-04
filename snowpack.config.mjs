/** @type {import("snowpack").SnowpackUserConfig } */

//import ArcGISPlugin from '@arcgis/webpack-plugin';
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  mount: {
    // 'node_modules/@arcgis/core/assets': {
    //   url: '/assets',
    //   static: true,
    //   resolve: false,
    // },
    public: { url: '/', static: true },
    src: { url: '/' },
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
    // [
    // '@snowpack/plugin-webpack',
    // {
    //   sourceMap: false,
    //   htmlMinifierOptions: false,
    // extendConfig: (config) => {
    //   config.plugins.push(
    //     // new ArcGISPlugin({
    //     //   copyAssets: false,
    //     //   locales: ['en'],
    //     //   features: {
    //     //     '3d': false,
    //     //   },
    //     // }),
    //     new BundleAnalyzerPlugin(),
    //   );
    //   config.node = {
    //     global: false,
    //   };
    //   config.optimization = {
    //     splitChunks: {
    //       chunks: 'async',
    //       minSize: 20000,
    //       minRemainingSize: 0,
    //       minChunks: 1,
    //       maxAsyncRequests: 30,
    //       maxInitialRequests: 30,
    //       enforceSizeThreshold: 50000,
    //       cacheGroups: {
    //         defaultVendors: {
    //           test: /[\\/]node_modules[\\/]/,
    //           priority: -10,
    //           reuseExistingChunk: true,
    //         },
    //         default: {
    //           minChunks: 2,
    //           priority: -20,
    //           reuseExistingChunk: true,
    //         },
    //       },
    //     },
    //   };
    //   return config;
    // },
    // },
    // ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  // optimize: {
  //   bundle: true,
  //   minify: true,
  // },
  packageOptions: {
    /* ... */
    //polyfillNode: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
