<template>
  <div class="softwares">
    <h2>התוכנות שלנו</h2>
    <div class="container">
      <transition-group appear @before-enter="beforeEnter" @enter="enter">
        <div class="software" :key="software.title" v-for="(software, index) in softwares" :data-index="index">
          <img v-bind:src="software.src" :alt="software.title">
          <h4>{{ software.title }}</h4>
          <p>{{ software.text }}</p>
          <router-link :to="software.url">מידע נוסף</router-link>
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
          start: "5% 100%",
          // markers: true,
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
        src: require('../assets/jpg/business.jpg'),
        title: "מיטל Netz",
        text: `תוכנת מדף עיסקית בסביבת חלונות,\n
        כוללת הנהלת חשבונות.`,
        url: "/netz"
      },
      {
        src: require('../assets/jpg/garage.jpg'),
        title: "מיטל למוסכים",
        text: `תוכנת ניהול מוסך\n
          מכילה את כל הפתרונות לניהול המוסך.`,
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
        src: require('../assets/jpg/by cars.jpg'),
        title: "מיטל טרייד",
        text: `תוכנה למגרשי רכב.\n
        ניהול קניה ומכירת רכבים.`,
        url: "/motors"
      }

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
  margin: 1% 0;
  flex-basis: 50%;
}

.container {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}

p {
  padding: 5% 3%;
  flex-grow: 1;
}


a {
  cursor: pointer;
  border: none;
  padding: 3px 5px;
  background-color: rgb(195, 43, 226);
  color: white;
  text-decoration: none;
}

a:hover {
  background: linear-gradient(#64a7e6, #e764e7);
}

img {
  height: 300px;
  width: 500px;
  margin: 5% 0;
}

img:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

@media only screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
    margin: 0;
    width: 100%;
    /* justify-content: space-around; */
  }

  img{
    width: 100%;
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
