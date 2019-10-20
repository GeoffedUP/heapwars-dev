import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from 'src/pages/NotFoundPage.vue'

// Admin pages
import Dashboard from 'src/pages/Dashboard.vue'
import HeapList from 'src/pages/HeapList.vue'
import LatestWinners from 'src/pages/LatestWinners.vue'
import HeapTxns from 'src/pages/HeapTxns.vue'
import LatestTxns from 'src/pages/LatestTxns.vue'
import AwesomeSHUF from 'src/pages/AwesomeSHUF.vue'
// import Notifications from 'src/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard'
  },

  // Sidebar linkes
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'heap-list',
        name: 'Heap List',
        component: HeapList
      },
      {
        path: 'latest-winners',
        name: 'Latest Winners',
        component: LatestWinners
      },
      {
        path: 'heap-txns',
        name: 'Heap Txns',
        component: HeapTxns
      },
      {
        path: 'latest-txns',
        name: 'Latest Txns',
        component: LatestTxns
      },
      {
        path: 'awesome-shuf',
        name: 'Awesome SHUF',
        component: AwesomeSHUF
      }
      // {
      //   path: 'notifications',
      //   name: 'Notifications',
      //   component: Notifications
      // }
    ]
  },

  // 404 Not Found page
  {
    path: '*',
    name: 'Troll Box',
    component: NotFound
  },


  {
    name: 'GitHub',
    path: '/github',
    beforeEnter() {                    
                  window.open("https://www.github.com/geoffedup", 
                  '_blank');
              }
  },
  {
    name: 'Donate',
    path: '/donate',
    beforeEnter() {                    
                  window.open("https://etherscan.io/address/0x69696562885eb3c9a609f957efd150df93ba8c2e#tokentxns", 
                  '_blank');
              }
  }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
