module.exports = {
  entry: './src/script.jsx',

  output: {
    filename: './dist/bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel' },
    ]
  }
}
