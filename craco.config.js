const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/img/'),
      '@': path.resolve(__dirname, 'src/')
    }
  }
}
