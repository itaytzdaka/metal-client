<template>
  <div class="home">
    <Header/>
    <Details/>
    <Softwares />
    <Benefits />
  </div>
</template>

<script>
import Header from './Header.vue';
import Details from './Details.vue';
import Softwares from './Softwares.vue';
import Benefits from './Benefits.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Details,
    Softwares,
    Benefits
  },
  methods: {

  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
