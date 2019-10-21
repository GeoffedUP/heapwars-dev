<template>
  <footer class="footer bg">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
           <router-link :to="{path:'/donate'}">Donate <i style="color: #d43200;" class="fa fa-heart heart"></i></router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright gobold text-center">
         Coded by
        <router-link :to="{path:'/geoffedup'}">GeoffedUP</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>


</style>
