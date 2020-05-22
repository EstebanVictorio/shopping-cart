const path = require('path')
const HWP = require('html-webpack-plugin')
const { ProvidePlugin, DefinePlugin } = require('webpack')

const projectDir = path.resolve(__dirname)

const baseHtmlConfig = {
  cache: 'false',
  inject: 'body',
  template: `${projectDir}/template.ejs`,
}

const providePluginConfig = {
  React: 'react',
  ReactDOM: 'react-dom',
}

const definePluginConfig = {
  API_URL: process.env.API_URL ? JSON.stringify(process.env.API_URL) : '',
}

const plugins = [
  new HWP(baseHtmlConfig),
  new DefinePlugin(definePluginConfig),
  new ProvidePlugin(providePluginConfig),
]

module.exports = plugins
