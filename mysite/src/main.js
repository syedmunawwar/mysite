import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueTyperPlugin from 'vue-typer'

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
