<template>
  <div class="contact-us full-screen">
      <footer class="footer bg">
    <div class="container-fluid">

<p align="center">
 Coded by<router-link :to="{path:'/geoffedup'}"><b class="donate">  GeoffedUP </b></router-link>
            &<router-link :to="{path:'/donate'}">  <font color="#b42a00">  <i style="color: #d43200;" class="fa fa-heart heart"></i></font> <b class="donate2"> Donate</b></router-link>
</p>
    </div>
  </footer>
              <div class="alert alert-info alert-with-icon justify-content-center" data-notify="container">
              <button type="button" aria-hidden="true" class="close" data-dismiss="alert">
                <p align="center"><i class="nc-icon nc-simple-remove"></i></p>
              </button></p>
              <span data-notify="icon" class="nc-icon nc-bulb-63"></span>
              <span data-notify="message"><p align="center">One of these buttons below will take you back to the main site... choose wisely!</p></span>
            </div>
  <br>
 <b-container fluid class="col-12">
  <b-row class="row justify-content-center">

    <b-col md="3" class="py-4 text-center col-lg-3 col-md-6 col-sm-6">
    <br>
      <router-link :to="{path:'/'}"><b-button id="popover" class="btn-hover btn-social btn-wd btn-lg" variant="primary"># 1</b-button></router-link>
        <b-popover target="popover" triggers="hover focus" placement="top">
          <template v-slot:title><font style="color: black;"><span data-notify="icon" class="nc-icon nc-bulb-63"></span> Option 1</font></template>
          <span class="text-danger">CLICK HERE</span> and Elon Musk will
          <em>WAKE YOU from<strong>THE MATRIX</strong></em>
        </b-popover>
      </b-col>

    <b-col md="3" class="py-4 text-center col-lg-3 col-md-6 col-sm-6">
    <br>
      <router-link :to="{path:'/'}"><b-button id="popover-1" class="btn-hover btn-social btn-wd btn-lg" variant="primary"># 2</b-button></router-link>
        <b-popover target="popover-1" triggers="hover focus" placement="top">
          <template v-slot:title><font style="color: black;"><span data-notify="icon" class="nc-icon nc-bulb-63"></span> Option 2</font></template>
          <span class="text-danger">GOOD CHOICE!!!</span> ... Siiiiiiike!
          <em>hahahaha <strong>;)</strong></em>
        </b-popover>
      </b-col>

      <b-col md="3" class="py-4 text-center col-lg-3 col-md-6 col-sm-6">
    <br>
      <router-link :to="{path:'/'}"><b-button id="popover-2" class="btn-hover btn-social btn-wd btn-lg" variant="primary"># 3</b-button></router-link>
        <b-popover target="popover-2" triggers="hover focus" placement="top">
          <template v-slot:title><font style="color: black;"><span data-notify="icon" class="nc-icon nc-bulb-63"></span> Option 3</font></template>
          <span class="text-danger">I WOUDLN'T CLICK THIS ONE!</span> naw this is probably the best
          <em>choice <strong>hmmm</strong></em>
        </b-popover>
      </b-col>

    <b-col md="3" class="py-4 text-center col-lg-3 col-md-6 col-sm-6">
    <br>
      <router-link :to="{path:'/'}"><b-button id="popover-3" class="btn-hover btn-social btn-wd btn-lg" variant="primary"># 4</b-button></router-link>
        <b-popover target="popover-3" triggers="hover focus" placement="top">
          <template v-slot:title><font style="color: black;"><span data-notify="icon" class="nc-icon nc-bulb-63"></span> Option 4</font></template>
          <span class="text-danger">AR3 YOU SURE???</span> good luck buddy
          <em>hmmmm <strong>;)</strong></em>
        </b-popover>
      </b-col>

    </b-row>
  </b-container>

            <div class="row content">
            <div class="col-md-12 col-md-offset-12 text-center">
              <h2 class="title text-danger">404 Not Found</h2>
              <h2 class="title">Oops! It seems that this page does not exist.</h2>
            </div>      
          </div>
<!--
<router-link :to="{path:'/donate'}" target="_blank">  <font color="#b42a00">  <i class="fa fa-heart heart"></i></font> <b class="donate2"> Donate</b></router-link> 
-->
</div>
</template>

<script>
  export default {


  methods:{
      click_back: function(back) {
        var url = "/";
        window.open(url, '_top');
        redirectWindow.location;
         },
       }
     }


</script>
<style>

.donate2 {
  color: #001d10;
}

.donate2:hover {
  color: #b42a00;
}

.donate {
  color: #0087ff;
}

.donate:hover {
  color: #b42a00;
}
</style>