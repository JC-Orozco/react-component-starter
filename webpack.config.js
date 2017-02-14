const path = require('path');
//const webpack = require('webpack');

const context = path.resolve(__dirname, 'src');

module.exports = {
  context,
  //context: path.resolve(__dirname, './src'),
  entry: {
    hello: './Hello.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
    library: 'ACE'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.(js|jsx)$/, loader: 'babel-loader',
        options: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                context // Without this line the demo does not work!!!
              }
            ]
          ]
        } 
      }
    ]
  }
};