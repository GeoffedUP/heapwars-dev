<template>
  <div id="app">

    <Head/>
    <Navbar/>
    <Body/>
    <Index/>
    <Footer/>

    </div>
</template>

<script>
import Head from './components/Head.vue'
import Navbar from './components/Navbar.vue'
import Body from './components/Body.vue'
import Index from './components/Index.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Head,
    Navbar,
    Body,
    Index,
    Footer
  }
}

</script>


<style>




#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #f5bc00;
}
</style>


