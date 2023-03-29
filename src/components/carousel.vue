<template>
    <div class="carousel">
        <CarouselSlide :direction="direction" v-for="(slide, index) in slides" :key="slide" :index="index"
            :visibleSlide="visibleSlide">
            <img :src="slide" />
            <p>{{ text[index] }}</p>
        </CarouselSlide>
        <CarouselDots v-if="indicators" :visibleSlide="visibleSlide" :slidesLength="slides.length"
            @switch="switchSlide($event)">
        </CarouselDots>
        <!-- <button v-if="controls" @click="next()" class="next">הבא</button>
        <button v-if="controls" @click="prev()" class="prev">הקודם</button> -->
        <img src=".././assets/svg/left.svg" v-if="controls" @click="next()" alt="next" class="left">
        <img src=".././assets/svg/right.svg" v-if="controls" @click="prev()" alt="right" class="right">
    </div>
</template>

<script>
import CarouselSlide from './carousel-slide.vue'
import CarouselDots from './carousel-dots.vue'

export default {
    name: 'Carousel',
    components: { CarouselSlide, CarouselDots },
    data() {
        return {
            visibleSlide: 0,
            direction: "",
            slideInterval: null
        }
    },
    props: {
        slides: {
            type: Array,
            required: true
        },
        text: {
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
        },
        interval: {
            type: Number,
            default: 6000
        },
        setInterval: {
            type: Boolean,
            default: false
        }
    },
    beforeUnmount() {

    },
    mounted() {
        this.startSlideTimer();
    },

    methods: {
        _next(step = 1) {
            this.visibleSlide < this.slides.length - 1 ? this.visibleSlide = this.visibleSlide + step : this.visibleSlide = 0;
            this.direction = "right";
        },
        next(step = 1) {
            this._next(step);
            this.startSlideTimer();
        },
        prev(step = -1) {
            this.visibleSlide > 0 ? this.visibleSlide = this.visibleSlide + step : this.visibleSlide = this.slides.length - 1;
            this.direction = "left";
            this.startSlideTimer();
        },
        switchSlide(index) {
            const step = index - this.visibleSlide;
            if (step > 0) {
                this.next(step);
            }
            else if (step < 0) {
                this.prev(step);
            }
        },
        startSlideTimer() {
            if (this.setInterval) {
                this.stopSlideTimer();
                this.slideInterval = setInterval(() => {
                    this._next();
                }, this.interval);
            }
        },
        stopSlideTimer() {
            clearInterval(this.slideInterval);
        }
    }
}
</script>

<style scoped>
.carousel {
    position: relative;
    width: 85%;
    padding-top: 50%;
    /* background: red; */
    /* height: 600px; */
    overflow: hidden;
    margin: auto;
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

.left {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    left: 0;
    cursor: pointer;

}

.right {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    right: 0;
    cursor: pointer;

}

@media only screen and (max-width: 1200px) {
    .carousel {
        width: 95%;
        padding-top: 55%;

    }
}
</style>

<style>
.carousel img {
    width: 100%;
}

.carousel p {
    position: absolute;
    bottom: 15%;
    right: 50%;
    transform: translate(50%, 0);
    margin: auto;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
}
</style>