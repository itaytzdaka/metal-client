<template>
    <div class="carousel">
        <CarouselSlide :direction="direction" v-for="(slide, index) in slides" :key="slide" :index="index"
            :visibleSlide="visibleSlide">
            <img :src="slide" />
        </CarouselSlide>
        <CarouselDots v-if="indicators" :visibleSlide="visibleSlide" :slidesLength="slides.length" @switch="switchSlide($event)">
        </CarouselDots>
        <button v-if="controls" @click="next()" class="next">הבא</button>
        <button v-if="controls" @click="prev()" class="prev">הקודם</button>
    </div>
</template>

<script>
import CarouselSlide from './carousel-slide.vue'
import CarouselDots from './carousel-dots.vue'

export default {
    name: 'Carousel',
    components: {CarouselSlide, CarouselDots},
    data() {
        return {
            visibleSlide: 0,
            direction: ""
        }
    },
    props: {
        slides: {
            type: Array,
            required: true
        },
        controls: {
            type: Boolean,
            default: false
        },
        indicators: {
            type: Boolean,
            default: false
        }
    },

    methods: {
    next( step = 1) {
      this.visibleSlide < this.slides.length - 1 ? this.visibleSlide=this.visibleSlide+step : this.visibleSlide = 0;
      this.direction = "right";

    },
    prev( step = -1 ) {
      this.visibleSlide > 0 ? this.visibleSlide=this.visibleSlide+step : this.visibleSlide = this.slidesLength - 1;
      this.direction = "left";
    },
    switchSlide(index){
      const step = index - this.visibleSlide;
      if(step>0){
        this.next(step);
      }
      else if(step<0){
        this.prev(step);
      }
    }
  }
}
</script>

<style scoped>
.carousel {
    position: relative;
    width: 70%;
    padding-top: 40%;
    /* background: red; */
    /* height: 600px; */
    overflow: hidden;
}

button {
    color: white;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    border: none;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
}

button:focus,
button:hover {
    outline: none;
    cursor: pointer;
}

.next {
    left: 0;
}

.prev {
    right: 0;
}
</style>

<style>
.carousel img {
    width: 100%;
}
</style>