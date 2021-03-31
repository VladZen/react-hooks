const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/assets/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/img/'),
      '@': path.resolve(__dirname, 'src/')
    }
  },
  jest: {
    configure: {
      collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
      ],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@images(.*)$': '<rootDir>/src/assets/img/$1',
        '^@styles(.*)$': '<rootDir>/src/assets/styles/$1',
        'mock.json': '<rootDir>/mock.json'
      }
    }
  }
}
