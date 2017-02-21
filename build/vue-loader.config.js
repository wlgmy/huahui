module.exports = {
  preserveWhitespace: false,
  loaders:{
    scss: "vue-style-loader!css-loader!sass-loader",
    stylus: "vue-style-loader!css-loader!stylus-loader",
    css: "vue-style-loader!css-loader",
    less: "vue-style-loader!css-loader!less-loader",
    postcss: "vue-style-loader!css-loader",
    styl: "vue-style-loader!css-loader!stylus-loader"
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
