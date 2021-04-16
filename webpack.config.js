const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: resolve(__dirname, 'src', 'index.jsx'),
    devtool: 'eval-source-map',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
            favicon: './dist/favicon.ico',
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                use: 'file-loader'
            },
            {
                test: /\.(ico)$/,
                use: 'file-loader'
            },
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist', 'index.html')
    }
}