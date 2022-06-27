<template>
  <div class="layout">
    <Navbar />
    <Header />
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
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
  overflow: hidden;
}

.main{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}


</style>
