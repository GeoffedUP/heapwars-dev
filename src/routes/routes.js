import DashboardLayout from '../layout/DashboardLayout.vue'
import TopNavbar from '../layout/TopNavbar.vue'
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
    
    name: 'Troll Box',
    path: '*/',
    component: NotFound
 
  },
  //My github
  {
    name: 'GitHub',
    path: '/geoffedup',
    beforeEnter() {                    
                  window.open("http://tiny.cc/geoffedup", 
                  '_blank');
              }
  },

  //Donation link
  {
    name: 'Donate',
    path: '/donate',
    beforeEnter() {                    
                  window.open("http://tiny.cc/donate-shuf",
                  '_blank');
              }
  },



    //Social links

      {
    name: 'TelegramShuf',
    path: '/telegramshuf',
    component: TopNavbar,
    beforeEnter() {
                  window.open("http://tiny.cc/telegram-shuf", 
                  '_blank');
                  }
      },

      {
    name: 'GitHubShuf',
    path: '/githubshuf',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/github-shuf", 
                  '_blank');
                  }
      },

      {
    name: 'TwitterShuf',
    path: '/twittershuf',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/twitter-shuf", 
                  '_blank');
                  }
      },

      {
    name: 'DiscordShuf',
    path: '/discordshuf',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/shuffle-discord", 
                  '_blank');
                  }
      },

      {
    name: 'RedditShuf',
    path: '/redditshuf',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/reddit-shuf", 
                  '_blank');
                  }
      },

      {
    name: 'Shuffle Website',
    path: '/shufflemonster',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/shuffle-monster", 
                  '_blank');
                  }
      },

      {
    name: 'ShuffleTokenContract',
    path: '/shuffletokencontract',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/shuffletoken-contract", 
                  '_blank');
                  }
      },

      {
    name: 'UniswapShuf',
    path: '/uniswapshuf',
    component: TopNavbar,
    beforeEnter() {                    
                  window.open("http://tiny.cc/uniswap-shuf", 
                  '_blank');
                  }
      },

      {
    name: 'DDEXshuf',
    path: '/ddexshuf',
    component: TopNavbar,
 beforeEnter() {                    
          window.open("http://tiny.cc/ddex-shuf", 
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
