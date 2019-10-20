
<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/heap-list">
        <i class="nc-icon nc-circle-09"></i>
        <p>Full Heap List</p>
      </sidebar-link>
      <sidebar-link to="/latest-winners">
        <i class="nc-icon nc-notes"></i>
        <p>Latest Winners</p>
      </sidebar-link>
      <sidebar-link to="/heap-txns">
        <i class="nc-icon nc-paper-2"></i>
        <p>Heap Txns</p>
      </sidebar-link>
      <sidebar-link to="/latest-txns">
        <i class="nc-icon nc-atom"></i>
        <p>Latest Txns</p>
      </sidebar-link>
      <sidebar-link to="/awesome-shuf">
        <i class="nc-icon nc-pin-3"></i>
        <p>Awesome SHUF</p>
      </sidebar-link>
      <sidebar-link to="*">
        <i class="nc-icon nc-bell-55"></i>
        <p>Troll Box</p>
      </sidebar-link>


    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
