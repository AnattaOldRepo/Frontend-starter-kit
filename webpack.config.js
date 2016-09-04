var debug = process.env.NODE_ENV !== "production";
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var postcssUtilities = require('postcss-utilities');
var postcssImport = require('postcss-import');
var postcssShort = require('postcss-short');
var autoprefixer = require('autoprefixer');
var easings = require('postcss-easings');
var cssnext = require('postcss-cssnext');
var stylelint = require("stylelint");
var webpack = require('webpack');
var precss = require('precss');
var lost = require('lost');



module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
     entry: {
        home: "./src/home",
    },
    output: {
        path: "./build",
        filename: "[name].js",
        chunkFilename: "[id].chunk.js"
    },

    module: {

        preLoaders: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],

        loaders: [

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader?sourceMap!resolve-url!postcss-loader'),
                exclude: /node_modules/
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]',
                exclude: /node_modules/
            },

            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader?limit=10000&name=fonts/[name].[ext]',
                exclude: /node_modules/
            }
        ]

    },

    postcss: function(webpack) {
        return [
            postcssImport({
                addDependencyTo: webpack,
                plugins: [
                    stylelint({
                        rules: {
                            "font-family-name-quotes": "always-where-required",
                            "function-url-quotes": "always",
                            "selector-attribute-quotes": "always",
                            "custom-media-pattern": ".+",
                            "selector-max-specificity": "0,2,0",
                            "unit-whitelist": ["em", "rem", "%", "px", "ms"],
                            "indentation": [ 4, {
                                "message": "Please use 4 spaces for indentation.",
                                "severity": "warning"
                              } ]
                        },
                    })
                  ]
            }),
            cssnext,
            postcssUtilities,
            postcssShort,
            easings,
            precss,
            lost,
            //autoprefixer, //Commenting out because CSSNext already has autoprefixer.
        ];
    },

    plugins: debug ? [
        new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new ExtractTextPlugin("[name].css")
    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false
        }),
    ],

};
