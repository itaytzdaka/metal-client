<template>
  <div class="softwares">
    <h2>התוכנות שלנו</h2>
    <div class="container">
      <transition-group appear @before-enter="beforeEnter" @enter="enter">
        <div class="software" :key="software.title" v-for="(software, index) in softwares" :data-index="index">
          <img v-bind:src="software.src" :alt="software.title">
          <h4>{{ software.title }}</h4>
          <p>{{ software.text }}</p>
          <router-link :to="software.url">לעוד מידע</router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default {
  name: 'Softwares',
  data() {
    return {
      softwares: []
    }
  },
  setup() {
    gsap.registerPlugin(ScrollTrigger);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(100px)';
    };

    const enter = (el) => {

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "40% 90%",
          //markers: true,
        },
        duration: 1,
        y: 0,
        opacity: 1,
        delay: el.dataset.index * 0.3
      });
    };

    return { beforeEnter, enter }
  },
  created() {
    this.softwares = [
      {
        src: require('../assets/jpg/garage.jpg'),
        title: "מיטל למוסכים",
        text: `תוכנת מוסך קלאסית,\n
          מכילה את כל הרכיבים למיחשוב המוסך.`,
        url: "/metal"
      },
      {
        src: require('../assets/jpg/rent.jpg'),
        title: "מיטל Rent",
        text: `תוכנה לחברות השכרה.\n
          חוזי השכרה על בסיס קצר או ליסינג ארוך טווח.`,
        url: "/rent"
      },
      {
        src: require('../assets/jpg/business.jpg'),
        title: "מיטל Netz",
        text: `תוכנת מדף עיסקית בסביבת חלונות,\n
        ניתן להתאימה לכל עסק.`,
        url: "/netz"
      },
    ]
  },
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.softwares {
  padding: 5% 0;
  text-align: center;
}

.software {
  display: flex;
  flex-direction: column;
  place-items: center;
  margin: 5% 0;
  flex-basis: 100%;
}

.container {
  width: 90%;
  display: flex;
  /* justify-content: space-around; */
}

p {
  padding: 5% 3%;
  flex-grow: 1;
}

a {
  margin: 3% 0;
  color: inherit;
}

img {
  height: 300px;
  width: 500px;
  margin: 5% 0;
}

img:hover{
  background:  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

@media only screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
    /* justify-content: space-around; */
  }
}

@media only screen and (max-width: 900px) {
  .softwares {
    padding: 10% 0;
  }

  .software {
    margin: 10% 0;
  }
}
</style>
