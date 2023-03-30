<template>
  <div class="specs">
    <div class="container">
      <h2>מפרט טכני</h2>
      <p>המפרט הטכני תקף בכל מוצרי התוכנה שלנו</p>

      <div class="spec" :key="spec.title" v-for="spec in specs" @mousemove="anim($event)" @mouseleave="outDiv($event)" @mouseenter="inDiv($event)">
        <img v-bind:src="spec.src" :alt="spec.title">
        <h4>{{ spec.title }}</h4>
        <p>{{ spec.text }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Specs',
  data() {
    return {
      specs: []
    }
  },
  created() {
    this.specs = [
      {
        src: require('../assets/png/invoice.png'),
        title: "מערכת שווק",
        text: `ניהול כרטסת לקוחות, הפקת חשבוניות מס בהקפה,חשבוניות מס קבלה, ת.משלוח ועוד.\r
          אפשרות לריכוז אוטומטי/ידני של ת.משלוח ו/או כרטיסי עבודה לחשבוניות מרכזות סוף חודש.\r
          בחשבונית המרכזת אופצייה לפרט/לא לפרט את רכיבי המסמכים שבה.\r
          תמיכה בהזמנות ובהצעות מחיר ואפשרות סגירתן כאסמכתא ל-ת.משלוח או לחשבונית מס.\r
          לכל מסמך פורמט עיצוב משלו ומבנה הדפסה הניתן להגדרה ולשינוי.\r
          מעקב אחרי הלקוח מזוויות רבות, התפלגות שנתית, תצוגה גרפית, היסטוריה של לקוח ניהול וניתוח יתרה.`
      },
      {
        src: require('../assets/png/inventory.png'),
        title: "מערכת רכש",
        text: `כרטסת ספקים, הפקת תעודות כניסה וחשבוניות ספקים. איתור מחיר קניה נמוך ו/או אחרון.\r
          ניתוב הקנייה/ההוצאה לרכיב ההוצאות המתאים,תמיכה בקניות פטורות מעמ.\r
          הקמת פריט או רכיב מלאי בזמן הקלדת חשבונית ספק.\r
          אפשרות להקלדת ת.משלוח ספקים וריכוז לחשבונית ספק תוך בקרה בסוף חודש.`
      },
      {
        src: require('../assets/png/cashbox.png'),
        title: "כספים וקופה",
        text: `שיקים נכנסים, שיקים יוצאים לספקים. קבלות, תשלומים לספקים, הפקדות לבנקים ספר קופה תזרים מזומנים,\r
          דוח מעקב אובליגו ודוחות שיקים דחויים. איתור שיק לפי מגוון מאפיינים. טיפול בשיקים חוזרים ובטופס הוצאה
          מהקופה\r
          ניהול מס רב של כרטיסי קופה ו/או כרטיסי בנק.`
      },
      {
        src: require('../assets/png/windows.png'),
        title: "קישוריות",
        text: `לתוכנות הנהלת חשבונות נפוצות בשוק, למוצרי Microsoft Office ולמוצרים נוספים
          של מערכת הפעלה חלונות המותקנים במחשב.`
      },
      {
        src: require('../assets/png/admin-panel.png'),
        title: "התאמות",
        text: `התאמות כרטיסים והתאמת בנק נוחה וחכמה לתיפעול.ההתאמה ידנית ו/או אוטומטית.תמיכה ביצירת פעולות יומן מתוך מסך
          ההתאמה.`
      },
      {
        src: require('../assets/png/forklift.png'),
        title: "ניהול מלאי",
        text: `ניהול כרטסת מלאי שאינה מוגבלת במימדיה. מערכת מעקב יתרות. דוחות מעקב התפלגות פריט חודשית ושנתית, דוח רווח
          לפריט,\r
          דוח רווח והפסד והתפלגות שנתית של פריט, השוואת מחיר קנייה/מכירה דוחות מלאי לרכיבים מומלצים להזמנה.`
      },
      {
        src: require('../assets/png/report.png'),
        title: "מערכת דוחות",
        text: `דוחות מעקב ודוחות סטטיסטיים כספיים גמישים וניתנים לעיצוב. מגוון דוחות גבייה ודוחות ריכוזי מידע לגבי התנהלות
          העסק.\r
          הדוחות ניתנים לייצוא לגליונות אלקטרוניים ולמעבדי תמלילים גרפיים המותקנים במחשב.`
      },
      {
        src: require('../assets/png/market-research.png'),
        title: "תצוגה גרפית",
        text: `גרף רווח הפסד בתלת מימד, הצגה גרפית של לקוחות, ספקים ו-או כל רכיב חשבונאי אחר במערכת הנהת החשבונות.\r
          התצוגה הגרפית במגוון אפשרויות תצוגה ואפשרות ייצוא לכלי גרפיקה ממחושבים במערכת ראה צילומי מסכים וגרפים לדוגמה.`
      },
      {
        src: require('../assets/png/search.png'),
        title: "מערכת שאילתות",
        text: `מערכת לאיתור נתונים מהירה כולל מנועי חיפוש טקסט לאיתור מהיר של פריט/לקוח/ספק/מסמך/קבלה ועוד.\r
          תמיכה בחתך דמיון פונטי ובמגוון חתכים נוספים המסייעים לאיתור מהיר. חלונות הדפדוף יבואו לעזרה בכל מקום בו יש
          צורך לאתר רכיב
          במערכת.\r
          מתוך חלון הדפדוף ניתן לקבל מידע נוסף לגבי הרכיב שאותר. שימוש אינטנסיבי בלחיצה-כפולה עם העכבר להצגת אסמכתאות
          כגון עותק מסמך מתוך שאילה או דף תנועות.`
      },
      {
        src: require('../assets/png/illustration.png'),
        title: "מערכת התכתבות",
        text: `מעבד תמלילים גרפי אינטגרלי פנימי המשמש בין השאר לעיצוב קובץ הלוגו של החברה.\r
          שילוב גופנים מעוצבים סגנונות וגוונים + תמיכה בדוור לפי כרטסת לקוחות ספקים והדפסת מדבקות.\r
          כמו כן משמש מעבד התמלילים להקלדת טקסט נסתר לגבי לקוח, ספק, מסמך או פריט מלאי במערכת.`
      },
      {
        src: require('../assets/png/ebook.png'),
        title: `מערכת הנה"ח`,
        text: `מערכת הנהח בנוייה של התוכנה.\r
          ריבוי כרטיסי הכנסות וכרטיסי קניות/הוצאות. דוחות מאזניים, דוח מקדמות ודוח מעמ. מאזן בוחן, דוח רווח והפסד.\r
          אפשרות ליצירת תנועות יומן בשיטה מקוצרת או מורחבת, כולל תמיכה בניהול סוגי תנועה לפעולות הנהח מורכבות,\r
          ניהול מנה זמנית עם אפשרות סגירה למאגר הקבוע. דוח ניכוי במקור ללקוחות/לספקים, כרטסת הנהח,
          רציפות אסמכתאות ועוד.`
      },
      {
        src: require('../assets/png/export.png'),
        title: "מערכת ייצוא נתונים",
        text: `האפשרות לייצא כל דוח / טבלה / גרף במערכת לגליונות אלקטרוניים ו/או למוצרי מייקרוסופט.\r
          תמיכה בהעתקת נתונים ללוח, תמיכה בייצוא קובץ תנועות יומן לתוכנות הנהח נפוצות בשוק כגון מנהל חשבשבת
          ופיננסית.\r
          כמו כן תוכניות שירות לייבוא נתונים כמו מחירון חלפים מקבצים חיצוניים או מגליונות אלקטרוניים.`
      },
      {
        src: require('../assets/png/flexibility.png'),
        title: "גמישות בעבודה",
        text: `מערכת פרמטרים חכמה המאפשרת גמישות רבה והתאמת התוכנה לדרישות הלקוח. האפשרות לבחור בגופני מסך או מדפסת
          ובצבעים.\r
          הגדרת מבנה מסמכים גמישה המאפשרת למשתמש לעצב את המסמכים לדרישותיו. התאמת הדפסה, כותרות, שוליים וצפיפות בין
          שורות ועוד.`
      },
      {
        src: require('../assets/png/idea.png'),
        title: "טיפים",
        text: `האפשרות לחייג ללקוח/לספק דרך מודם.\r
          האפשרות לחיבור מהיר לכתובת אינטרנט או לאתר בית של לקוחות וספקים.\r
          תמיכה בשליחה של מסמכים ודוחות לאימייל או בפקס.\r
          עיצוב לוגו גרפי צבעוני אופציה לשילוב קובץ תמונה בלוגו.\r
          אלפון טלפונים מהיר וידידותי.`
      }
    ]
  },
  methods: {
    check($event) {
      // console.log("check");
      // console.log($event.target.parentElement.className);

    },
    anim($event) {
      console.log("anim");
      console.log($event.target.parentElement);
      console.log("height: "+$event.target.parentElement.offsetHeight);
      console.log("widht: "+$event.target.parentElement.offsetWidth);

      console.log("clientX: " + $event.clientX + " clientY: " +  $event.clientY);
      console.log("layerX: " + $event.layerX + " layerY: " +  $event.layerY);
      console.log("offsetX: " + $event.offsetX + " offsetY: " +  $event.offsetY);
      console.log("pageX: " + $event.pageX + " pageY: " +  $event.pageY);
      console.log("screenX: " + $event.screenX + " screenY: " +  $event.screenY);
      console.log("x: " + $event.x + " y: " +  $event.y);

      console.log("innerWidth: " + window.innerWidth + " innerHeight: " +  window.innerHeight);
      console.log("pageX: " + $event.pageX + " pageY: " +  $event.pageY);




      const xAxis = (($event.target.parentElement.offsetWidth /2 ) - $event.layerX) / 300;
      const yAxis = ($event.layerY - $event.target.parentElement.offsetHeight /3 ) / 100;

      console.log("xAxis: " + xAxis + " yAxis: " +  yAxis);
      $event.target.parentElement.className == "spec" ? $event.target.parentElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(100%)` : "";
      console.log($event);
      console.log($event.target.parentElement.className);
    },
    outDiv($event) {
      console.log("outDiv");
      $event.target.parentElement.className == "spec" ? $event.target.parentElement.style.transform = `rotateY(0) rotateX(0) scale(1) scale(100%)` : $event.target.style.transform = `rotateY(0) rotateX(0) scale(1) scale(100%)`;
      $event.target.parentElement.className == "spec" ? $event.target.parentElement.style.transition = `all 0.5s ease` : $event.target.style.transition = `all 0.5s ease`;

      console.log($event);
      console.log($event.target.parentElement.className);
    },
    inDiv($event) {
      console.log("inDiv");
      $event.target.parentElement.className == "spec" ? $event.target.parentElement.style.transition = `none` : $event.target.style.transition = `none`;
    }
  },
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.specs {
  padding: 5% 0;
  background: #f8f8f8;
  /* text-align: center; */

}


.container{
  perspective: 3000px;

}



.spec {
  display: flex;
  margin: 10% 0;
  width: 80%;
  /* transform-style: preserve-3d; */
}

p {
  padding: 1% 0;
}

.spec p {
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


@media only screen and (max-width: 1200px) {
  .spec {
    flex-direction: column;
    width: 90%;

    /* justify-content: space-around; */
  }
}

@media only screen and (max-width: 450px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    display: block;
    margin: 10% auto;
  }
}
</style>
