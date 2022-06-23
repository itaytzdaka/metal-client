<template>
  <div class="footer">
    <div class="container">
      <span>עיצוב והקמה: מיטל מחשבים. כל הזכויות שמורות.</span>
      <span class="ltr">©2003-{{date.getFullYear()}} Metal Computers All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return{
      date: new Date()
    }
  }
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    min-height: 50px;
    color: rgb(116, 116, 116);
    background: #000000;
  }

  .container{
    width: 90%;    
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: center;
  }

  .ltr{
    direction: ltr;
  }
</style>
