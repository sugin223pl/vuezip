module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      zip: 'vue-cli-service zip:build'
    },
    devDependencies: {
      'archiver': '^3.0.0'
    }
  })
}