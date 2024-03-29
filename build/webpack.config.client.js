const webpack = require('webpack');
const path = require('path');
//  通过cross-env包 在命令行之前添加环境变量 判断当前环境是否是开发环境，还是生产环境
const merge = require('webpack-merge');
const HTMLplugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const VueClientPlugin = require('vue-server-renderer/client-plugin');
let config;
const isDev = process.env.NODE_ENV === 'development'
// console.log(isDev)

const defaultPlugins = [
    // 在webpack编译过程中判断环境 ,如果不加这一步则打开的服务为文件夹
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: isDev ? '"development"': '"production"'
        }
    }),
    new HTMLplugin({
        template: path.join(__dirname, 'template.html')
    }),

    // new VueClientPlugin()   // 会默认生成一个vue-ssr-client-manifest.json 缓存文件
]

const devServer = {
    port: 8085,
    host: '0.0.0.0', // 设置为0.0.0.0 可以通过localhost 和内网ip 或者127.0.0.1访问
    overlay: {  //  如果在webpack编译的时候有任何错误都会显示在网页上
        error: true
    },
    headers: {'Access-Control-Allow-Origin': '*'},
    open: true,  // 启动webpack-dev-server 自动打开页面
    // historyFallback: {  // 映射地址
    //
    //  },

    proxy: {
        '/api': 'http://127.0.0.1:3333/',
        '/user': 'http://127.0.0.1:3333/'
    },
    hot: true,    // 添加热加载需要配置   webpack.HotModuleReplacementPlugin()  plugin
    // 在前端路由跳转的时候 如果不加这个
    // 浏览器会认为是在请求服务器
    // 刷新页面的时候会报错 error found
    historyApiFallback: {
      index: '/public/index.html'
    }
}

if(isDev){  // 开发环境
    config = merge(baseConfig, {
        // 调试代码
        devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: [
                    "vue-style-loader?sourceMap", // creates style nodes from JS strings
                    "css-loader?sourceMap", // translates CSS into CommonJS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true    //
                        }
                    } // compiles Sass to CSS, using Node Sass by default
                ]
            },{
                test: /\.styl/,
                // vue-style-loader: 因为style-loader是不会有热加载，所以必须使用vue-style-loader支持
                use: [
                    'vue-style-loader',
                    'css-loader',
                    // 可以和vue-loader的配置一样把css文件变为module模块通过对象引入变量使用class
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         // 开启css 模块化的条件
                    //         module: true,
                    //         // 和vue-loader一样的配置css模块化
                    //         // 查看效果footer.jsx
                    //         localIdentName: isDev ? '[path]-[name]-[hash:base64:5]': '[hash:base64:5]'
                    //     }
                    // },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true    //
                        }
                    },
                    'stylus-loader'
                ]

            }]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [
                        `Your application is running here: http://${devServer.host}:${8888}`
                    ]
                }
            })
        ])
    });
} else {    // 生产打包环境
    console.log('生产环境')
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../src/main.js'),
            vendor: ['vue']     // 单独打包类库
        },
        output: {
            // chunkhash  和 hash区别是 hash打包出的模块hash都是一样的 chunkhash每个不同
            filename: 'js/[name].[chunkhash:8].js',
            publicPath: '/public/'  // 服务端需要
        },
        module: {
            rules: [{
                test: /\.(css|scss)$/,
                use: ExtractPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },{
                test: /\.styl/,
                use: ExtractPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'stylus-loader'
                    ]
                })
            }]
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('style/styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({   // 单独打包类库等文件
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({   // 单独打包类库等文件
                name: 'runtime' // 单独打包出单独的webpack模块
            })
        ])
    })
}

module.exports = config;
