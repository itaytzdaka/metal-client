<template>
  <div class="home">
    <Header/>
    <Details/>
    <Softwares />
    <Benefits />
    <Customers/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Details from './Details.vue';
import Softwares from './Softwares.vue';
import Benefits from './Benefits.vue';
import Customers from './Customers.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Details,
    Softwares,
    Benefits,
    Customers
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
