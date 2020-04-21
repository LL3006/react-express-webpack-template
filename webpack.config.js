let webpack = require("webpack");
let path = require("path");

let BUILD_DIR = path.resolve(__dirname, './build');
let APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js',
   },
   output: {
     filename: 'bundle.js',
     path: BUILD_DIR,
   },
   module: {
    rules: [
     {
       test: /(\.css)$/,
       use: [{
           loader: "style-loader", // creates style nodes from JS strings
       }, {
           loader: "css-loader", // translates CSS into CommonJS
       }],
     },
     {
       test: /\.(jsx|js)?$/,
       use: [{
         loader: "babel-loader",
         options: {
           cacheDirectory: true,
           presets: ['react', 'es2015'], // Transpiles JSX and ES6
         },
       }],
     },
    ],

  },
};

module.exports = config;