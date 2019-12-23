// webpack.config.js 
const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env;
const pkg = require('./package.json');
let libraryName = pkg.name;
let outputFile, outputPath, mode, entryFile;

if (env === 'build') {
    mode = 'production';
    outputPath = '/lib';
    entryFile = '/src/index.js';
    outputFile = libraryName + '.min.js';
} else if (env === 'dev') {
    mode = 'development';
    outputPath = '/lib';
    entryFile = '/src/index.js';
    outputFile = libraryName + '.js';
} else if (env === 'module_build') {
    mode = 'development';
    outputPath = '/'
    entryFile = '/src/moduleIdx.js';
    outputFile = 'index.js';
}

const config = {
    mode: mode,
    // entry: __dirname + '/src/index.js',
    entry: __dirname + entryFile,
    devtool: 'inline-source-map',//track errors in the source file instead of in bundles
    output: {
        // path: __dirname + '/lib',
        path: __dirname + outputPath,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js']
    }
};

module.exports = config;