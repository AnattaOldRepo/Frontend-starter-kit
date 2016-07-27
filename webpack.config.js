var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/index.js",

  output: {
    path: "./build",
    filename: "app.js"
  },

  module: {
        loaders: [
            { 
              test: /\.css$/, 
              loader: ExtractTextPlugin.extract( 'css-loader!postcss-loader' )
            }
        ]
  },

  postcss: [ autoprefixer({ browsers: ['last 5 versions'] }) ],

  plugins: debug ? [
    new ExtractTextPlugin("app.css")
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],

};