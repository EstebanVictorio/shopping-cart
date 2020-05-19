const path = require("path")
const HWP = require("html-webpack-plugin")
const { ProvidePlugin } = require("webpack")

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

const plugins = [
  new HWP(baseHtmlConfig),
  new ProvidePlugin(providePluginConfig),
]


module.exports = plugins