require('dotenv').config()

const path = require('path')

module.exports = {
  env: {
    DARK_SKY_SECRET_KEY: process.env.DARK_SKY_SECRET_KEY,
  },
  webpack(config, options) {
    config.resolve.alias['src'] = path.join(__dirname, 'src')

    return config
  },
}
