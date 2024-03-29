/*
 =========================================================
 * heapwars-web 2.0.0
 =========================================================
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'



// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'

import './registerServiceWorker'

import Vuetable from 'vuetable-2'
// plugin setup
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(Vuetable)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
