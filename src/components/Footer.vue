<template>
  <div class="footer">
    <div class="container">
      <span>עיצוב והקמה: איתי צדקה. כל הזכויות שמורות למיטל מחשבים.</span>
      <span class="ltr">©2003-{{ date.getFullYear() }} Metal Computers All Rights Reserved.</span>
    </div>
  </div>
</template>

<script setup>
const date = new Date()
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 1rem 0;
  color: rgb(116, 116, 116);
  background: #000000;
}

.container {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ltr {
  direction: ltr;
}
</style>
