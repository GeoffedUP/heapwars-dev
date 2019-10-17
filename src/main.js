/*
 =========================================================
 * heapwars-web 2.0.0
 =========================================================
 */
import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'
import PortalVue from 'portal-vue'
import VueScrollTo from 'vue-scrollto';
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import router from "./router/index";

import i18n from "./i18n"
// import './registerServiceWorker'






import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '../src/assets/css/mycss.css'
import BlackDashboard from "./plugins/blackDashboard";
import '../src/assets/css/w3.css'



Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(PortalVue);
Vue.use(VueScrollTo);
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
