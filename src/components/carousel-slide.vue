<template>
    <transition :name="direction" mode="in-out">
        <div class="carousel-slide" v-show="visibleSlide == index">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
export default {
    name: 'Carousel-slide',
    data() {
        return {

        }
    },
    props: ['visibleSlide', "index", "direction"],
}
</script>

<style scoped>
.carousel-slide{
    position: absolute;
}

.left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out;
}

.left-leave-active {
    animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes leftOutAnimation {
    from {
        transition: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}

.right-enter-active {
    animation: rightInAnimation 0.4s ease-in-out;
}

.right-leave-active {
    animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

@keyframes rightOutAnimation {
    from {
        transition: translateX(0);
    }

    to {
        transform: translateX(+100%);
    }
}
</style>