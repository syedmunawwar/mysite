import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueTyperPlugin from 'vue-typer'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)
Vue.use(VueMeta)
 
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
