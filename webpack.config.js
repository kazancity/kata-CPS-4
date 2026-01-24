const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserslist: [
                      'last 2 versions',
                      'Firefox ESR',
                      'not OperaMini All',
                      'not dead',
                    ],
                  }),
                ],
                sourceMap: true,
              },
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'svg/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Услуги и сервисы CPS',
      template: './src/index.html',
      publicPath: './',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/favicon.svg',
          to: '',
        },
      ],
    }),
  ],
};
