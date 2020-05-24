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
    utils: `${dir}/utils`,
    actions: `${dir}/actions`,
    consts: `${dir}/consts.ts`,
    services: `${dir}/services`,
    reducers: `${dir}/reducers`,
    selectors: `${dir}/selectors`,
    components: `${dir}/components`,
    'action-creators': `${dir}/action-creators`,
  },
})

module.exports = {
  resolve,
  composeResolve,
}
