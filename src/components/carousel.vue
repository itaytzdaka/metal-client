<template>
    <div class="carousel">
        <slot></slot>
        <button @click="next" class="next">הבא</button>
        <button @click="prev" class="prev">הקודם</button>
    </div>
</template>

<script>

export default {
    name: 'Carousel',
    data() {
        return {

        }
    },
    methods: {
        next(){
            this.$emit('next');
        },
        prev(){
            this.$emit('prev');
        }
    }
}
</script>

<style scoped>
    .carousel{
        position: relative;
        width: 600px;
        height: 350px;
        overflow: hidden;
    }

    button{
        color: black;
        position: absolute;
        height: 40px;
        width: 50px;
        top: calc(50% - 20px);
    }

    button:focus, button:hover{
        outline: none;
        cursor: pointer;
    }
    .next{
        left: 0;
    }
    .prev{
        right: 0;
    }
</style>

<style>
    img{
        height: 350px;
    }
</style>