<template>
  <div class="metal">
    <div class="container">
      <h1>מיטל למוסכים</h1>
      <p>
        תוכנת מיטל מותקנת במאות מוסכים בישראל לשביעות רצונם של המשתמשים.
        התוכנה מספקת טיפול בכרטסת לקוחות וספקים, טיפול בכרטסת רכבים,
        כרטיסי תיקון, מעקב אחרי כספים תזרים מזומנים בנקים וקופה כולל רכיב התאמת בנק ומערכת הנהלת חשבונות המשלימה את המוצר.
      </p>
      <!-- <Carousel :slides="slides" :text="text" controls indicators setInterval interval=6000></Carousel> -->
      <Carousel :slides="slides" :text="text" controls indicators></Carousel>
    </div>


  </div>
</template>

<script>
import Carousel from './carousel.vue'

export default {
  name: 'Metal',
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
}
</script>


<style scoped>

.container{
  width: 90%;
  margin: 20px auto;
}

p{
  margin: 20px 0;
}
</style>
