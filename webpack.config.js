module.exports = {
  entry: './src/react-layer-cake',

  output: {
    path: './dist/',
    filename: 'react-layer-cake.js',
    library: 'react-layer-cake',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
  },

  module: {
    loaders: [
      { test: /.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}
