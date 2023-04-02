<template>
  <div class="downloads">
    <div class="explain">
      <h1>הורדת תוכנית סוף שנה 2023</h1>
      <p><mark>שימו לב לשינוי פרמטר שנת מס</mark></p>
      <p>את הפעולה יש לבצע ב- 01/01/2023 בבוקר או בסוף יום -30/12/2022.</p>
      <p>מהתפריט הראשי לוחצים <b>תחזוקת מערכת</b>-----><br><b>פרמטרים</b>----> לוחצים <b>כללי</b> בפינה השמאלית העליונה
      </p>
      <p>יש לשנות את <mark>פרמטר שנת מס</mark> ל- <b>2023</b></p>
      <p>לסיום הפעולה יש ללחוץ <mark>אישור</mark> <b>למטה בצד ימין</b></p>
      <img src="../assets/jpg/ppage15.jpg" alt="">
      <p>בהצלחה, ובברכת שנה מוצלחת. <mark>ממיטל מחשבים</mark>.</p>
    </div>
    <div class="downloads-container">
      <div>
        <p>תוכנית סוף שנה 2023 כקובץ exe:</p><a href="/downloads/m2023.exe" download>להורדה</a>
      </div>
      <div>
        <p>תוכנית סוף שנה 2023 כקובץ zip:</p><a href="/downloads/m2023.zip" download>להורדה</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Downloads',
  data() {

  },
  created() {

  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.downloads {
  text-align: center;
  flex-grow: 1;
}

.explain {
  padding: 20px;
}

h1 {
  text-decoration: underline;
  margin: 1.5% 0;
}

p {
  margin: 1.5% 0;
}

mark {
  padding: 0 5px;
  background-color: rgb(113, 167, 236);
}

.downloads-container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 15px;
  justify-content: space-around;
  background-color: rgb(49, 85, 133);
}

.downloads-container div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 25%;
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
  width: 350px;
  min-width: 30%;
}

@media only screen and (max-width: 450px) {
  .downloads {
    font-size: 1rem;
  }

  .downloads-container div {
    width: 70%;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
