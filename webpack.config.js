const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

// modulation rules for configuration
const moduleRules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    'env',
                    'react'
                ]
            }
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: "[name]__[local]__[hash:base64:5]"
                    }
                }
            ]
        }
    ]
};

// Client side modulation
const client = {
    mode: 'development',
    entry: './src/client/index.js',
    module: moduleRules,
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
}

// export configuration to module
module.exports = client;