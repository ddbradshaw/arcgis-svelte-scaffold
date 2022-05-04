const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ArcGISPlugin = require('@arcgis/webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/index.ts'],
  //   context: path.resolve(__dirname, 'src'),

  // Application output location
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '',
  },

  resolve: {
    alias: {
      svelte: path.dirname(require.resolve('svelte/package.json')),
    },
    extensions: ['.mjs', '.js', '.svelte', '.ts'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: [path.resolve('node_modules')],
  },

  optimization: {
    minimize: true,
    splitChunks: { chunks: 'all' },
    //runtimeChunk: { name: 'runtime' },
    // minimizer: [`...`, new CssMinimizerPlugin()]
  },

  module: {
    rules: [
      //   {
      //     test: /\.worker\.ts$/,
      //     exclude: /node_modules/,
      //     use: ['babel-loader', 'worker-loader'],
      //   },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            compilerOptions: {
              dev: false,
            },
            emitCss: true,
            hotReload: false,
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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
            },
          },
        ],
      },
      { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),

    // Copies files/folders from/to locations
    //new CopyPlugin([{ from: 'assets', to: 'assets' }]),

    // Inject the bundles into the distribution index.html
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
