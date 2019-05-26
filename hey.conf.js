const path = require('path');

module.exports = {
  port: 9012,
  root: 'dist',
  webpack: {
    console: true,
    publicPath: '/',
    output: {
      './src/index.html': {
        entry: './src/app'
      }
    },
    pluginImport: [
      {
        libraryName: 'heyui',
        libraryDirectory: 'lib/components'
      },{
        libraryName: 'iview',
        libraryDirectory: 'src/components'
      }
    ],
  },
};
