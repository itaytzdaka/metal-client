<template>
  <div class="benefits">
    <div class="container">
      <h2>למה מיטל מחשבים?</h2>
      <div class="benefit">
        <img src="../assets/png/flexibility.png" alt="flexibility">
        <h4>גמישות</h4>
        <p>המשתמש יכול להתאים את התוכנה לצרכיו. ניתן לקבוע את פורמט
          המסמכים, לשנות שדות כותרת , מבנה טורים משתתפים, ניתן לעצב את פורמט ההדפסה
          לנייר של המסמכים ואת מבנה הדוחות.
          מערכת פרמטרים חכמה מאפשרת לעצב את מימדי החלונות, ולהגיע לתצוגה עשירה
          ויזואלית בשלל סגנונות גוונים וגופנים.</p>
      </div>
      <div class="benefit">
        <img src="../assets/png/all-inclusive.png" alt="all-inclusive">
        <h4>הכל כלול</h4>
        <p>תוכנות מיטל נמכרות בחבילה שלמה המכילה פתרונות כוללים להתנהלות העסקית, כולל מערכת הנהלת חשבונות בנוייה,
          ואינן
          בנויות ממודלים כאלה ואחרים.</p>
      </div>
      <div class="benefit">
        <img src="../assets/png/relax.png" alt="relax">
        <h4>נוחות בעבודה</h4>
        <p>לחצני עכבר ידידותיים, חלונות חיפוש ועזרה לאיתור מידע דרוש, מסכים מעוצבים נוחים
          לצפייה הניתנים להגדרה, ריכוזיות מידע למסך הנוכחי.</p>
      </div>
      <div class="benefit">
        <img src="../assets/png/connectivity.png" alt="connectivity">
        <h4>קישוריות</h4>
        <p>לתוכנות הנהלת חשבונות נפוצות בשוק, למוצרי Microsoft Office ולמוצרים נוספים
          של מערכת הפעלה חלונות המותקנים במחשב.</p>
      </div>
      <div class="benefit">
        <img src="../assets/png/support.png" alt="support">
        <h4>תמיכה</h4>
        <p>בכל סוגי המדפסות בשוק
          בכל מערכות ההפעלה חלונות למעט חלונות 95.</p>
      </div>
      <div class="benefit">
        <img src="../assets/png/flexibility.png" alt="">
        <h4>קישוריות למולטיקט</h4>
        <p>תמיכה ביצירת קובץ ממשק לחשבוניות הסדר חברות ביטוח
          לפי פורמט מ.ר.מ.</p>
      </div>
      <div class="benefit">
        <img src="../assets/png/min-requirements.png" alt="min-requirements">
        <h4>דרישות מינימום</h4>
        <p>פנטיום 3 400 MHZ ומעלה, זכרון מינימום 128 על גבי לוח האם.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefits',
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
  width: 70%;
}

h2 {
  margin: 3% 0;
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
    margin: 15% 0;
  }
}
</style>
