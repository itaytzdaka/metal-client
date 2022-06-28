<template>
  <div class="details">
    <div class="container">
      <transition appear @before-enter="beforeEnter" @enter="enter">
        <h2>על מיטל מחשבים</h2>
      </transition>
      <transition name="text" appear>
        <p>
          מיטל מחשבים הינו בית תוכנה. <br /><br />
          אנו מפתחים אפליקציות עסקיות בסביבת חלונות לחברות המתמחות בסחר רכב.<br />
          בין לקוחותנו מאות מוסכים, בתחום מכונאות, פחחות, חשמל, מיזוג אוויר ועוד.<br />
          כנ"ל חנויות לסחר בחלפי רכב, עסקים לתווך ומכירת רכבים, פירוק מכוניות, חברות השכרה, מוסכים לאופנועים ועוד.<br />
          כמו כן חברות שאינן קשורות לענף הרכב כגון קבלני בניין, משווקי כלי עבודה ואינסטלציה, אירועים, בתי תוכנה, בתי
          מלאכה לשיפוץ ועוד.
        </p>
      </transition>

      <!-- <p>
        תוכנת מיטל מתמחה בגמישות. המשתמש יכול להתאים את התוכנה לצרכיו.<br/>
        ניתן לקבוע את פורמט המסמכים, לשנות שדות כותרת , מבנה טורים משתתפים,<br/>
         ניתן לעצב את פורמט ההדפסה לנייר של המסמכים ואת מבנה הדוחות.<br/>
        מערכת פרמטרים חכמה מאפשרת לעצב את מימדי החלונות, ולהגיע לתצוגה עשירה ויזואלית בשלל סגנונות גוונים וגופנים.<br/><br/>
        מיטל מתאפיינת בנוחות בעבודה. לחצני עכבר ידידותיים, חלונות חיפוש ועזרה לאיתור מידע דרוש,<br/>
        מסכים מעוצבים נוחים לצפייה, ריכוזיות מידע למסך הנוכחי.<br/><br/>
        קישוריות לתוכנות הנהלת חשבונות נפוצות בשוק, למוצרי Microsoft Office ולמוצרים נוספים של מערכת הפעלה חלונות<br/>
        המותקנים במחשב תמיכה בכל סוגי המדפסות בשוק בכל מערכות ההפעלה חלונות למעט חלונות 95<br/>
      </p> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Details',
  components: {
  },
  setup() {

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-100px)';
    };

    const enter = (el) => {

      gsap.to(el, {
        duration: 2,
        ease: "bounce.out",
        y: 0,
        opacity: 1
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
.details {
  display: flex;
  align-items: center;
  padding: 3% 0;
  min-height: 50vh;
  /* background: #eefff6; */
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgb(224, 224, 224) 100%);
  overflow: hidden;
}

p {
  margin: 2% 0;
  padding: 1% 3%;
}



.text-enter-from {
  opacity: 0;
  transform-origin: 50% 0;
  transform: scale(30%,30%) translateY(150px);

}

.text-enter-to {
  opacity: 1;
}

.text-enter-active {
  transition: all 1.5s ease;
}

@media only screen and (max-width: 900px) {

p {
  margin: 10% 0;
  padding: 1% 3%;
}
}

</style>
