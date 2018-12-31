module.exports = {
    devtool: 'source-map',
    entry: './src/Component.js',
    output: {
        path: __dirname + '/dist',
        filename: 'tidal-slider.js',
        libraryTarget: 'umd',
        library: 'TidalSlider'
    },
    optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
    module: {
      rules: [
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              "babel-loader",
              "eslint-loader",
            ]
        },
        {
            test: /\.html$/,
            use: [ {
                loader: "html-loader"
            } ]
        },
        {
            test: /\.(woff|woff2)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name]__[hash:8].[ext]',
                }
              }
            ]
          },
        {
            test: /.scss/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[local]__[hash:6]',
                },
              },
              'postcss-loader',
              'sass-loader',
            ],
          },
      ]
    }
  };
