<template>
  <div class="softwares">
    <h2>התוכנות שלנו</h2>
    <div class="container">
      <div class="software">
        <img src="../assets/png/car-repair.png" alt="car-repair">
        <h4>מיטל למוסכים</h4>
        <p>תוכנת מוסך קלאסית, מכילה את כל הרכיבים למיחשוב המוסך. <br />
          תוכנת מיטל מותקנת במאות מוסכים בישראל לשביעות רצונם של המשתמשים. <br />
          התוכנה מספקת טיפול בכרטסת לקוחות וספקים, טיפול בכרטסת רכבים,
          כרטיסי תיקון, מעקב אחרי כספים תזרים מזומנים בנקים וקופה כולל רכיב התאמת בנק
          ומערכת הנהלת חשבונות המשלימה את המוצר.</p>
        <router-link to="/metal">לעוד מידע</router-link>
      </div>
      <div class="software">
        <img src="../assets/png/car-rental.png" alt="car-rental">
        <h4>מיטל Rent</h4>
        <p>תוכנה לחברות השכרה.<br />
          חוזי השכרה על בסיס קצר או ליסינג ארוך טווח.<br />
          ניהול טבלת מדדים לחישובי ריבית והצמדה.<br />
          ניהול טבלת מטבעות ותמיכה בתנועות במט"ח.<br />
          אפשרויות מגוונות לעיצוב ובניית מערכת בסטנדרטים גבוהים.<br />
          ניהול כרטסת צי רכבים , מעקב אינטנסיבי על תנועות רווח והפסד של כל רכב, אפשרויות חיתוך כרטסת רכבים ובניית
          טפסים שימושיים.<br />
          דוחות התראה ומעקב ושאילתות חיתוך מגוונות. </p>
        <router-link to="/rent">לעוד מידע</router-link>
      </div>
      <div class="software">
        <img src="../assets/png/business.png" alt="business">
        <h4>מיטל Netz</h4>
        <p>תוכנת מדף עיסקית בסביבת חלונות שניתן להתאימה לכל עסק.<br />
          משלבת נוחות בעבודה, גמישות ואפשרויות עיצוב, מודול הנהלת-חשבונות בנוי, ואספקת מידע עדכני לגבי
          התנהלות העסק המסייע בקבלת החלטות ובתהליכי גבייה.</p>
        <router-link to="/netz">לעוד מידע</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Softwares',
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
  height: 100px;
  width: 100px;
  margin: 3% 0;
}

@media only screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
    /* justify-content: space-around; */
  }
}

@media only screen and (max-width: 900px) {
  .software {
    margin: 10% 0;
  }
}
</style>
