const path = require('path');
//const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// exports.page = ({ title }) => ({
//   plugins: [new MiniHtmlWebpackPlugin({ publicPath: '/', context: { title } })],
// });

exports.clean = () => ({
  plugins: [new CleanWebpackPlugin()],
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.typescript = () => ({
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
});

exports.optimize = () => ({
  optimization: {
    minimize: true,
    splitChunks: { chunks: 'all' },
    //   runtimeChunk: { name: 'runtime' },
    //   minimizer: [`...`, new CssMinimizerPlugin()]
  },
});

exports.svelte = (mode) => {
  const prod = mode === 'production';

  return {
    resolve: {
      alias: {
        svelte: path.dirname(require.resolve('svelte/package.json')),
      },
      extensions: ['.mjs', '.js', '.svelte', '.ts'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: !prod,
              },
              emitCss: prod,
              hotReload: !prod,
              //   preprocess: preprocess({
              //     postcss: true,
              //   }),
            },
          },
        },
        {
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  };
};
