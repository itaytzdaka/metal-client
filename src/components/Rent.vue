<template>
  <div class="rent">
    <div class="container">
      <h2>מיטל Rent</h2>
      <p>
        ניהול טבלת מדדים לחישובי ריבית והצמדה.
        ניהול טבלת מטבעות ותמיכה בתנועות במט"ח.
        אפשרויות מגוונות לעיצוב ובניית מערכת בסטנדרטים גבוהים.
        ניהול כרטסת צי רכבים, מעקב אינטנסיבי על תנועות רווח והפסד של כל רכב, אפשרויות חיתוך כרטסת רכבים ובניית טפסים
        שימושיים.
        דוחות התראה ומעקב ושאילתות חיתוך מגוונות.
      </p>
      <Carousel :slides="slides" :text="text" controls indicators></Carousel>
    </div>
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

      ],
      text: [
        'חוזה השכרה',
        'חוזה השכרה',
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
.container {
  width: 90%;
  margin: 20px auto;
}

p {
  margin: 20px 0;
}
</style>
