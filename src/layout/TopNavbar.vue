<template>



    <nav class="navbar navbar-expand-lg">


 <div class="container-fluid fixed">  



      <a class="navbar-brand" href="./"> </a>
       <a class="collapse navbar-collapse justify-content-end" />   
              <base-dropdown tag="ul" title="Connect">

    <template slot="title"><font style="color: #001d10;"><b><i class="nc-icon nc-planet"></i></b></font><font style="color: #001d10; font-weight: bold;">  Connect $SHUF</font></template>
            <a class="dropdown-item" href="#">Telegram</a>
            <a class="dropdown-item" href="#">GitHub</a>
            <a class="dropdown-item" href="#">Twitter</a>
            <a class="dropdown-item" href="#">Discord</a>
            <a class="dropdown-item" href="#">Reddit</a>
            <div class="divider"></div>
            <div class="divider"></div>
            <a class="dropdown-item" href="#">Shuffle Website</a>

          </base-dropdown>   
      
   <!--


      <base-dropdown tag="ul">

            <a class="dropdown-item" href="#">Notification 1</a>
            <a class="dropdown-item" href="#">Notification 2</a>
            <a class="dropdown-item" href="#">Notification 3</a>
            <a class="dropdown-item" href="#">Notification 4</a>
            <a class="dropdown-item" href="#">Another notification</a>
          </base-dropdown>

   
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="nc-icon nc-palette"></i>
            </a>
          </li>

          <a href="#" class="nav-link"><i class="nc-icon nc-send"></i></a>

                    <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
              </a>  
      -->

                  <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
   
      </div>










      
  </nav>


</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

 .nc-planet {
  color: #033a21;
  font-weight: bold;
 }

 .nc-planet:hover{
     color: #ad2800;
     text-decoration: none;
  }

a{
  color: #033a21;
  font-weight: bold;

  &:hover, &:focus{
     color: #ad2800;
     text-decoration: none;
  }
}

.navbar {


}

</style>
