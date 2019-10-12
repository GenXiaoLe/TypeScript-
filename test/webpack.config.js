const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/index.tsx",
    output:{
        path: path.resolve(__dirname + '/dist'),
        filename: 'bundle.js',
    },
    devtool:"source-map",
    resolve:{
        extensions: [".ts", ".tsx", ".js"]
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,loader:"ts-loader"
            },
            {
                test: /.(png|jpg|svg)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: 'img/[name].[ext]'
                  }
                }
              },
              {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};