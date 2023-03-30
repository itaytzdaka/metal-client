<template>
  <div class="rent">
    <h2>מיטל Rent</h2>
    <p>
                ניהול טבלת מדדים לחישובי ריבית והצמדה.
          ניהול טבלת מטבעות ותמיכה בתנועות במט"ח.
          אפשרויות מגוונות לעיצוב ובניית מערכת בסטנדרטים גבוהים.
          ניהול כרטסת צי רכבים, מעקב אינטנסיבי על תנועות רווח והפסד של כל רכב, אפשרויות חיתוך כרטסת רכבים ובניית טפסים שימושיים.
          דוחות התראה ומעקב ושאילתות חיתוך מגוונות.
    </p>
    <Carousel :slides="slides" :text="text" controls indicators></Carousel>

  </div>
</template>

<script>
import Carousel from './carousel.vue'

export default {
  name: 'Rent',
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

</style>
