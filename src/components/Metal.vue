<template>
  <div class="metal">
    <div class="container">
      <h1>מיטל למוסכים</h1>
      <p>
        תוכנת מיטל מותקנת במאות מוסכים בישראל לשביעות רצונם של המשתמשים.
        התוכנה מספקת טיפול בכרטסת לקוחות וספקים, טיפול בכרטסת רכבים,
        כרטיסי תיקון, מעקב אחרי כספים תזרים מזומנים בנקים וקופה כולל רכיב התאמת בנק ומערכת הנהלת חשבונות המשלימה את המוצר.
        תמיכה ביצירת קובץ ממשק לחשבוניות הסדר חברות ביטוחלפי פורמט מ.ר.מ.
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
        require('../assets/jpg/3.jpg'),
        require('../assets/jpg/4.jpg'),
        require('../assets/jpg/5.jpg'),

      ],
      text: [
        'חלון דפדוף פרטי מלאי',
        'הסטוריית פעולות, חתך לפי תווים',
        'הצמדת תמונת JPEG לרכב ממצלמה או סורק'
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
