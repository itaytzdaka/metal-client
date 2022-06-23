<template>
  <div class="header">
    <h1>מיטל מחשבים לניהול העסק שלך</h1>
    <h4>תוכנה עסקית בסביבת חלונות לחברות המתמחות בסחר רכב</h4>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  }

  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  font-size: 1.7rem;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  /* background: #cff5ff; */
  background: linear-gradient(54deg, rgba(2,0,36,1) 0%, rgba(32,119,157,1) 47%, rgba(0,212,255,1) 100%);
  text-shadow: 0px 1px 25px rgba(0, 0, 0, 0.8)
}

h4{
  margin: 1% 0;
}


@media only screen and (max-width: 900px) {
  .header {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 450px) {
  .header {
    height: 40vh;
    font-size: 0.8rem;
  }
}
</style>
