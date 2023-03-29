<template>
  <div class="benefits">
    <div class="container">
      <h2>למה מיטל מחשבים?</h2>
      <transition-group appear @before-enter="beforeEnter" @enter="enter">
        <div class="benefit" :key="benefit.title" v-for="benefit in benefits">
          <img v-bind:src="benefit.src" :alt="benefit.title">
          <h4>{{ benefit.title }}</h4>
          <p>{{ benefit.text }}</p>
        </div>
      </transition-group>

    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {

  name: 'Benefits',
  data() {
    return {
      benefits: []
    }
  },
  created() {
    this.benefits = [
      {
        src: require('../assets/png/flexibility.png'),
        title: "גמישות",
        text: `המשתמש יכול להתאים את התוכנה לצרכיו. ניתן לקבוע את פורמט
            המסמכים, לשנות שדות כותרת , מבנה טורים משתתפים, ניתן לעצב את פורמט ההדפסה
            לנייר של המסמכים ואת מבנה הדוחות.
            מערכת פרמטרים חכמה מאפשרת לעצב את מימדי החלונות, ולהגיע לתצוגה עשירה
            ויזואלית בשלל סגנונות גוונים וגופנים.`
      },
      {
        src: require('../assets/png/all-inclusive.png'),
        title: "הכל כלול",
        text: `תוכנות מיטל נמכרות בחבילה שלמה המכילה פתרונות כוללים להתנהלות העסקית, כולל מערכת הנהלת חשבונות בנוייה,
            ואינן
            בנויות ממודלים כאלה ואחרים.`
      },
      {
        src: require('../assets/png/relax.png'),
        title: "נוחות בעבודה",
        text: `לחצני עכבר ידידותיים, חלונות חיפוש ועזרה לאיתור מידע דרוש, מסכים מעוצבים נוחים
            לצפייה הניתנים להגדרה, ריכוזיות מידע למסך הנוכחי.`
      },
      {
        src: require('../assets/png/connectivity.png'),
        title: "קישוריות",
        text: `לתוכנות הנהלת חשבונות נפוצות בשוק, למוצרי Microsoft Office ולמוצרים נוספים
            של מערכת הפעלה חלונות המותקנים במחשב.`
      },
      {
        src: require('../assets/png/support.png'),
        title: "תמיכה",
        text: `בכל סוגי המדפסות בשוק
            בכל מערכות ההפעלה חלונות למעט חלונות 95.`
      },
      {
        src: require('../assets/png/flexibility.png'),
        title: "קישוריות למולטיקט",
        text: `תמיכה ביצירת קובץ ממשק לחשבוניות הסדר חברות ביטוח
            לפי פורמט מ.ר.מ.`
      },
      {
        src: require('../assets/png/min-requirements.png'),
        title: "דרישות מינימום",
        text: `פנטיום 3 400 MHZ ומעלה, זכרון מינימום 128 על גבי לוח האם.`
      }
      ];
  },
  setup() {
    gsap.registerPlugin(ScrollTrigger);

    const beforeEnter = (el) => {
      el.style.transform = 'translateX(5%)';
      el.style.opacity = 0;
    };

    const enter = (el) => {

      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "center 90%",
          //markers: true,
        },
        duration: 1,
        x: 0,
        opacity: 1,
        delay: 0.3
      });
    };

    return { beforeEnter, enter }
  },
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.benefits {
  padding: 3% 0;
  color: #ffffff;
  background: linear-gradient(180deg, rgb(71, 71, 71) 0%, rgba(0, 0, 0, 0.98) 100%);

  /* text-align: center; */
}

.benefit {
  display: flex;
  margin: 7% 0;
  /* width: 70%; */
}

h2 {
  margin: 3% 0;
}

h4{
  min-width: 150px;
}

p {
  padding: 3% 3%;
  flex-grow: 1;
}

a {
  margin: 3% 0;
  color: inherit;
}

img {
  height: 150px;
  width: 150px;
}

/* .benefit-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.benefit-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.benefit-enter-active {
  transition: all 2s ease;
} */

@media only screen and (max-width: 1200px) {
  .benefit {
    flex-direction: column;
    width: 90%;
  }
}

@media only screen and (max-width: 900px) {
  .benefit {
    flex-direction: column;
  }
}

@media only screen and (max-width: 450px) {
  .benefit {
    place-items: center;
    margin: 15% auto;
  }
}
</style>
