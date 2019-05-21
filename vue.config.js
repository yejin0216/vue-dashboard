module.exports = {
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: ` 
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_theme.scss";
        `,
      },
    },
  },
};
