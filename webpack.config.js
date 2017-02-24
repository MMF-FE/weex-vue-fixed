const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

let baseConfig = {
    entry: './src/fixed.vue',
    devtool: false,
    output: {
        path: path.resolve('./dist'),
        filename: 'weex-vue-fixed.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modulesDirectories: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ],
        extensions: ['', '.js', '.ts', '.vue', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            ts: 'ts-loader'
        }
    },
    externals: {
        vue: 'vue'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': 'production'
        }),
        // minify with dead-code elimination
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // optimize module ids by occurrence count
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

let indexConfig = merge({}, baseConfig)
indexConfig.entry = './src/index.ts'
indexConfig.output.filename = 'index.js'

let weexConfig = merge({}, baseConfig)
weexConfig.output.filename = 'weex-weex-fixed.js'
weexConfig.module.loaders[0].loader = 'weex-loader'

let vueConfig = merge({}, baseConfig)
vueConfig.output.filename = 'weex-vue-fixed.js'


module.exports = [weexConfig, vueConfig, indexConfig]