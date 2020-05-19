const path = require("path")
const baseConfig = require("./base.config")
const { getComposedConfig } = require("./dev.config")
const dotenv = require("dotenv")
dotenv.config()

let config = null
const projectDir = path.resolve(__dirname, "../")
if(process.env.NODE_ENV === "development") {
  config = getComposedConfig(baseConfig, projectDir)
} else {
  config = baseConfig
}


module.exports = config