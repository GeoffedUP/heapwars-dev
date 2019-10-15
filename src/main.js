import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto';



import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/mycss.css'
import '../src/assets/w3.css'






Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);

new Vue({
  render: h => h(App),
}).$mount('#app')

