module.exports = {
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  lintOnSave: false,
  css: {
    modules: true,
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only',
        sass: {
          data: '@import "@/assets/scss/style.scss";',
        },
      },
    },
  },
};
