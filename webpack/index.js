const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./base.config')
const { getComposedConfig } = require('./dev.config')
const dotenv = require('dotenv')
dotenv.config()

const definePluginConfig = {
  API_URL: process.env.API_URL ? JSON.stringify(process.env.API_URL) : '',
}

let config = null
const projectDir = path.resolve(__dirname, '../')
if (process.env.NODE_ENV === 'development') {
  config = getComposedConfig(baseConfig, projectDir, [
    new webpack.DefinePlugin(definePluginConfig),
  ])
} else {
  config = baseConfig
}

module.exports = config
