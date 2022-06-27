<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Layout msg="Welcome to Your Vue.js App"/> -->
  <Layout/>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  direction: rtl;
}
html{
  overflow-y: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  width: 80%;
  margin: auto;
}

p{
  white-space: pre-line;
  
}


@media only screen and (max-width: 450px) {
  :root {
    font-size: 15px;
  }
}

@media only screen and (max-width: 300px) {
  :root {
    font-size: 12px;
  }
}
</style>
