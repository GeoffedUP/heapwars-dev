import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");
const Winners = () => import(/* webpackChunkName: "common" */ "@/pages/Winners.vue");
const Heap = () => import(/* webpackChunkName: "common" */ "@/pages/Heap.vue");
const Awesomeshuf = () => import(/* webpackChunkName: "common" */ "@/pages/Awesomeshuf.vue");
// const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
// const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
// const Template = () => import(/* webpackChunkName: "common" */ "@/pages/Template.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "winners",
        name: "winners",
        component: Winners
      },
      {
        path: "heap",
        name: "heap",
        component: Heap
      },
      {
        path: "awesomeshuf",
        name: "awesomeshuf",
        component: Awesomeshuf
      }
      // {
      //   path: "profile",
      //   name: "profile",
      //   component: Profile
      // },
      // {
      //   path: "notifications",
      //   name: "notifications",
      //   component: Notifications
      // },
      // {
      //   path: "icons",
      //   name: "icons",
      //   component: Icons
      // },
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
