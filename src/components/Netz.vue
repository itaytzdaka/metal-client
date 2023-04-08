<template>
  <div class="netz">
    <div class="container">
      <h2>מיטל Netz</h2>
      <p>
        משלבת נוחות בעבודה, גמישות ואפשרויות עיצוב, מודול הנהלת-חשבונות בנוי,
        ואספקת מידע עדכני לגבי התנהלות העסק המסייע בקבלת החלטות ובתהליכי גבייה.
      </p>
      <Carousel :slides="slides" :text="text" controls indicators></Carousel>

    </div>
  </div>
</template>

<script>

import Carousel from './carousel.vue'

export default {
  name: 'Netz',
  components: {
    Carousel
  },
  data() {
    return {
      slides: [
        require('../assets/jpg/6.jpg'),
      ],
      text: [
        'הצגת דף תנועות חובה זכות של לקוח',
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
