import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHead from 'vue-head'
import store from './store'
 
Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
