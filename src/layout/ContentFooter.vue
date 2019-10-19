<template>
  <footer class="footer bg">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/'}"><font color="#b42a00"><i class="fa fa-heart heart"></i></font> Donate</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
         Coded by
        <a href="https://github.com/geoffedup"  target="_blank">GeoffedUP</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {}

</script>
<style>
 {
  background-color: #297a43;
  border-width: 5px;
  border-color: #001600
  
}

</style>
