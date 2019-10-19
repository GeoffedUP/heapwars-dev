/*
 =========================================================
 * heapwars-web 2.0.0
 =========================================================
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import BootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'



// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// css
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/w3.css'
// import '../src/assets/css/demo.css'

// router setup
import routes from './routes/routes'

import './registerServiceWorker'
// plugin setup
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(PortalVue)
Vue.use(VueScrollTo);
Vue.use(VueRouter)
Vue.use(LightBootstrap)

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
