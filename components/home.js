var Vue = require('vue')
var app = new Vue({
  render: function (h) {
    return h('p', 'hello world')
  }
})

var renderer = require('vue-server-render').createRenderer()

renderer.renderToString(app, function(err, html){
  if (error) throw error
  console.log(html)
})
