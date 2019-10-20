import VTooltip from 'v-tooltip'
// Notifications plugin
import Notifications from 'src/components/NotificationPlugin'
// A plugin file where you could register global components used across the app
import GlobalComponents from './globalComponents'
// A plugin file where you could register global directives
import GlobalDirectives from './globalDirectives'
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from './components/SidebarPlugin'
// A plugin for page anchors
import VueScrollTo from 'vue-scrollto';
// Bootstrap-Vuejs plugins
import BootstrapVue from 'bootstrap-vue'
// A plugin needed to use bootstrap-vue Toast elements
import PortalVue from 'portal-vue'

// asset imports
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/demo.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/w3.css'
import './assets/sass/light-bootstrap-dashboard.scss'
/**
 * This is the main Light Bootstrap Dashboard Vue plugin where dashboard related plugins are registerd.
 */
export default {
  install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
    Vue.use(Notifications)
    Vue.use(VTooltip)
    Vue.use(BootstrapVue);
    Vue.use(PortalVue)
    Vue.use(VueScrollTo);
  }
}
