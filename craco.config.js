const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/img/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    }
  }
}
