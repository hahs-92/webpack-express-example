const path = require('path')
//node
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT


/** @type {import('webpack').Configuration} */

module.exports = {
    name: 'express-server',
    entry: './src/index.ts',
    target: 'node',
    mode: NODE_ENV,
    externals: [ nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts','.js']
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
            //typescript
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    }
}