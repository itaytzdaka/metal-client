<template>
  <div class="header">
    <transition name="h1" appear>
      <h1>מיטל מחשבים לניהול העסק שלך</h1>
    </transition>
    <transition name="h4" appear>
      <h4>תוכנה עסקית בסביבת חלונות לחברות המתמחות בסחר רכב</h4>
    </transition>

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
  position: relative;
  font-size: 2rem;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  background:  linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/jpg/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background: linear-gradient(54deg, rgba(2, 0, 36, 1) 0%, rgba(32, 119, 157, 1) 47%, rgba(0, 212, 255, 1) 100%); */
  text-shadow: 0px 1px 50px rgba(0, 0, 0, 0.8)
}

h4 {
  margin: 1% 0;
}

.h1-enter-from {
  opacity: 0;
  transform: translate(-5%, 0);
}

.h1-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.h1-enter-active {
  transition: all 2s ease;
}

.h4-enter-from {
  opacity: 0;
  transform: translate(5%, 0);
}

.h4-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.h4-enter-active {
  transition: all 1.5s ease;
}
/* 
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 2s ease;
} */


@media only screen and (max-width: 900px) {
  .header {
    font-size: 1rem;
    background:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/jpg/hero.jpg");
    background-position: 25%;
    background-size: cover;
    text-align: center;

  }
}

@media only screen and (max-width: 450px) {
  .header {
    height: 40vh;
    font-size: 1.2rem;
    padding: 0 10%;
  }
}
</style>
