<template>
  <div class="motors">
    <div class="container">
      <h2>מיטל טרייד</h2>
      <p>
        לניהול מגרשי רכב קנייה ומכירה <br>
        ניהול כרטסת רכבים גמישה במאפיינים <br>
        הפקת חשבונית מכירה עם מע"מ על הרווח חישוב <br>
        אוטומטי, או מע"מ מלא <br>
        תמיכה בזכרון דברים ממוחשב <br>
        טיפול בעסקאות טרייד אין <br>
        תמונות רכב וצילומים <br>
        ספר רכב ממוחשב <br>
        מצבת רכב לתאריך <br>
        דף מידה לרכב <br>
        הכנסות ו/או הוצאות לרכב <br>
        דוח מכירות ו/או קניות לתקופה
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
        require('../assets/jpg/7.jpg'),
        require('../assets/jpg/8.jpg'),
        require('../assets/jpg/9.jpg'),
      ],
      text: [
        'הצגת כרטיס רכב והיסטורית פעולות',
        'מסך הפקת חשבונית מכירה',
        'מסך עריכת זכרון דברים מכירה'
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
