<template>
  <div class="layout">
    <Navbar />
    <Header />
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Home from './Home.vue';
import Footer from './Footer.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Home,
    Footer
  }
  // props: {
  //   msg: String
  // }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}


</style>
