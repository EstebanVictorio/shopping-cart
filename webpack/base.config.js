const path = require("path")
const dotenv = require("dotenv")
const plugins = require("./plugins.config")
const { composeResolve } = require("./resolve.config")
const projectDir = path.resolve(__dirname)
const root = path.resolve(__dirname, "../", "./src")
dotenv.config({ path: `${projectDir}/../` })

/** @type {webpack.Configuration} */
let config = {
  plugins,
  devtool: 'inline-source-map',
  resolve: composeResolve(root),
  mode: process.env.NODE_ENV || "development",
  entry: {
    index: `${root}/index.tsx`,
  },
  output: {
    publicPath: "/",
    path: `${projectDir}/public`,
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  }
}


module.exports = config