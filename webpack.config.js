var debug = process.env.NODE_ENV !== "production";
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssUtilities = require('postcss-utilities');
var postcssInitial = require('postcss-initial');
var postcssImport = require('postcss-import');
var postcssShort = require('postcss-short');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var precss = require('precss');


module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/index.js",

    output: {
    	path: "./build",
        filename: "app.js"
    },

    module: {

        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],

        loaders: [

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader!resolve-url!postcss-loader')
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            }
        ]

    },

    postcss: function(webpack) {
        return [
            postcssImport({
                addDependencyTo: webpack
            }), // Must be first item in list
            postcssUtilities,
            postcssShort,
            postcssInitial,
            precss,
            autoprefixer
        ];
    },

    plugins: debug ? [
        new ExtractTextPlugin("app.css")
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],

};