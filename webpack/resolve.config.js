const resolve = {
  extensions: ['.ts', '.tsx', '.js'],
}

const composeResolve = dir => ({
  ...resolve,
  alias: {
    pages: `${dir}/pages`,
    hooks: `${dir}/hooks`,
    store: `${dir}/store`,
    sagas: `${dir}/sagas`,
    actions: `${dir}/actions`,
    services: `${dir}/services`,
    reducers: `${dir}/reducers`,
    components: `${dir}/components`,
    'action-creators': `${dir}/action-creators`,
  },
})

module.exports = {
  resolve,
  composeResolve,
}
