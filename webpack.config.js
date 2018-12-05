const {join:pathJoin} = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
        index:'./src/js/index.js',
        contact: './src/js/contact.js'
    },
    output:{
        filename:'js/[name]_bundle.js', // 输出文件名字的格式
        path:pathJoin(__dirname,'./dist') // 输出的绝对路径
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'] // +++
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "sass-loader"]
                })
            },
            /* {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["@babel/preset-env"]
                  }
            }
            }, */
            {
                test: /\.(jpg|gif|png|svg|jpeg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/'
                    }
                  }
                ]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader'] // +++
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                  }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify: {
                collapseWhitespace: false,
              },
              hash: true,
              chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
            minify: {
              collapseWhitespace: false,
            },
            hash: true,
            excludeChunks: ['index']
          }),
        new MiniCssExtractPlugin({
            filename:'style.css' // 指定输出的css文件名.
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin("style/styles.css")
    ]
}