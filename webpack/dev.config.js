const Jarvis = require("webpack-jarvis")
const plugins = require("./plugins.config")
const devServer = {
  open: true,
  publicPath: "/",
  port: process.env.PORT || 3000,
}

const devPlugins = [
  ...plugins,
  new Jarvis({
    port: process.env.JARVIS_PORT || 4000,
  })
]

const devConfig = {
  devServer,
  plugins: devPlugins,
}

const getComposedConfig = (options, contentBase) => (
  {
    ...options,
    devServer: {
      ...devServer,
      contentBase,
    },
    plugins: devPlugins,
  }
)



module.exports = {
  devConfig,
  getComposedConfig,
}