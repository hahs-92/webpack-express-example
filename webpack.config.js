const path = require('path')

/** @type {import('webpack').Configuration} */

module.exports = {
    name: 'express-server',
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
             //babel
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    }
}