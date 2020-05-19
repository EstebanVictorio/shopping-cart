const resolve = {
  extensions: ['.ts', '.tsx', '.js'],
}

const composeResolve = dir => ({
  ...resolve,
  alias: {
    pages: `${dir}/pages`,
    hooks: `${dir}/hooks`,
    services: `${dir}/services`,
    components: `${dir}/components`,
  },
})

module.exports = {
  resolve,
  composeResolve,
}
