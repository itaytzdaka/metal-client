<template>
  <div class="downloads">
    <h1>הורדות</h1>
    <div class="downloads-container">
      <!-- <div>
        <p>עדכון API v2:</p><a href="/downloads/m2023.exe" download>להורדה</a>
      </div> -->
      <div>
        <p>עדכון API v2:</p><a href="/downloads/apiv2.zip" download>להורדה</a>
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
  color: rgb(31, 3, 107);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  gap: 15px;
  justify-content: space-around;
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
