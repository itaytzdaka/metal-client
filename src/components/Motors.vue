<template>
  <div class="motors">
    <div class="container">
      <h2>מיטל מגרשים</h2>
      <p>

      </p>
      <Carousel :slides="slides" :text="text" controls indicators></Carousel>

    </div>
  </div>
</template>

<script>

import Carousel from './carousel.vue'

export default {
  name: 'Motors',
  components: {
    Carousel
  },
  data() {
    return {
      slides: [
        require('../assets/jpg/1.jpg'),
        require('../assets/jpg/2.jpg'),
        require('../assets/jpg/3.jpg'),
      ],
      text: [
        'slide 1',
        'slide 2',
        'slide 3'
      ]
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 90%;
  margin: 20px auto;
}

p{
  margin: 20px 0;
}
</style>
