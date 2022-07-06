<template>
    <div class="carousel-dots">
        <button class="carousel-dot" :class="{active: index-1==visibleSlide}" v-for="index in slidesLength"></button>
    </div>
</template>

<script>

export default {
    name: 'Carousel-dots',
    data() {
        return {

        }
    },
    methods: {

    },
    props: ['visibleSlide', "slidesLength"],

}
</script>

<style scoped>
.carousel-dots {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    z-index: 2;
}

.carousel-dot {
    height: 15px;
    width: 15px;
    margin: 0 1em;
    border-radius: 50%;
    border: none;
    background-color: rgb(255, 255, 255); 
    opacity: 0.5;
    cursor: pointer;
}

.active{
    opacity: 1;
}
</style>
