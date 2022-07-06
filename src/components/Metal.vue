<template>
  <div class="metal">
    <h1>מיטל למוסכים</h1>
    <p>
      תוכנת מיטל מותקנת במאות מוסכים בישראל לשביעות רצונם של המשתמשים.
      התוכנה מספקת טיפול בכרטסת לקוחות וספקים, טיפול בכרטסת רכבים,
      כרטיסי תיקון, מעקב אחרי כספים תזרים מזומנים בנקים וקופה כולל רכיב התאמת בנק ומערכת הנהלת חשבונות המשלימה את המוצר.
    </p>
    <!-- <img :src="slides[0]" alt=""> -->
    <Carousel @prev="prev" @next="next" >
      <CarouselDots :visibleSlide="visibleSlide" :slidesLength="slides.length"></CarouselDots>
      <CarouselSlide :direction="direction" v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide">
        <img :src="slide" />
      </CarouselSlide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from './carousel.vue'
import CarouselSlide from './carousel-slide.vue'
import CarouselDots from './carousel-dots.vue'

export default {
  name: 'Metal',
  components: {
    Carousel,
    CarouselSlide,
    CarouselDots
  },
  data() {
    return {
      slides: [
        require('../assets/jpg/1.jpg'),
        require('../assets/jpg/2.jpg'),
        require('../assets/jpg/3.jpg'),
      ],
      visibleSlide: 0,
      direction: "left"
    }
  },
  computed: {
    slidesLength(){
      return this.slides.length;
    }
  },
  methods: {
    next() {
      this.visibleSlide == this.slidesLength -1? this.visibleSlide=0 : this.visibleSlide++;
      this.direction= "right";

    },
    prev() {
      this.visibleSlide == 0? this.visibleSlide=this.slidesLength -1 : this.visibleSlide--;
      this.direction= "left";
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
