<template>
  <div class="navbar">
    <nav>
      <!-- <span><router-link to="/">מיטל מחשבים</router-link></span> -->
      <ul>
        <li>
          <router-link to="/"><img id="metal-logo" src="../assets/svg/Metal-logo.svg" alt="metal-logo"></router-link>
        </li>
        <li><router-link to="/specs">מפרט טכני</router-link></li>
        <!-- <li><router-link to="#">מסכי דוגמה</router-link></li> -->
        <li><router-link to="/contact">יצירת קשר</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav{
  position: relative;
  display: flex;
  align-items: center;
  background-color: #131313;
  box-shadow: 0 0 10px 10px rgba(49, 49, 49, 0.3);
  z-index: 1;
}

nav a {
  display: flex;
  color: white;
  text-align: center;
  padding: 14px 10px;
  margin: 0 15px;
  text-decoration: none;
}

#metal-logo{
  width: 150px;
  height: auto;
}

span{
  margin: 0 2%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: right;
}

li a:hover {
  background-color: #111;
}



@media only screen and (max-width: 450px) {
  #metal-logo{
  width: 100px;
  /* height: auto; */
}
}
</style>
