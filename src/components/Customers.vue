<template>
  <div class="customers">
    <h3>מעל 500 בתי עסק שעובדים איתנו</h3>
    <div class="main-scroll">
      <img src=".././assets/svg/right.svg" class="icon" @click="right()">
      <div class="cover">
        <div class="scroll-images">
          <div class="child" v-for="(customer) in customers"><img class="child-img" :title="customer.title"
              :src="customer.src" alt="img"></div>
        </div>
      </div>
      <img src=".././assets/svg/left.svg" class="icon" @click="left()">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Customers',
  data() {
    return {
      customers: []
    }
  },
  setup() {


  },
  created() {
    this.customers = [
      {
        src: require(`../assets/customers/צמיגי תלפיות.jpeg`),
        title: `צמיגי תלפיות בע"מ`,
      },
      {
        src: require(`../assets/customers/מוסך יעקב.jpg`),
        title: `מוסך יעקב`,
      },
      {
        src: require(`../assets/customers/מוסך המיישרים.jpg`),
        title: `מוסך המיישרים-חלווה בע"מ`,
      },
      {
        src: require(`../assets/customers/מוסך איכות.jpg`),
        title: `מוסך איכות`,
      },
      {
        src: require(`../assets/customers/coinamaticlogo.png`),
        title: `קוינאמטיק ישראל`,
      },
      {
        src: require(`../assets/customers/עופר שירותי רכב.png`),
        title: `עופר שירותי רכב`,
      },
      {
        src: require(`../assets/customers/מוסך לירון בעמ.jpg`),
        title: `מוסך לירון בע"מ`,
      },
      {
        src: require(`../assets/customers/בן-חיון מוסך א.ישראל.jpg`),
        title: `בן-חיון מוסך א.ישראל בע"מ`,
      },
      {
        src: require(`../assets/customers/אחים שאלתיאל מוסך נאמן בעמ.jpg`),
        title: `אחים שאלתיאל מוסך נאמן בע"מ`,
      },
      {
        src: require(`../assets/customers/מוסך צמרת רפי אסרף בעמ.jpg`),
        title: `מוסך צמרת רפי אסרף בע"מ`,
      },
      {
        src: require(`../assets/customers/מוסך המומחה בעמ.jpg`),
        title: `מוסך המומחה בע"מ`,
      },
      {
        src: require(`../assets/customers/מוסך גליסקור.jpg`),
        title: `מוסך גליסקור`,
      },
      {
        src: require(`../assets/customers/מוסך רעים בעמ.jpg`),
        title: `מוסך רעים בע"מ`,
      },
      {
        src: require(`../assets/customers/א.א קרמן פרונט בעמ.png`),
        title: `א.א קרמן פרונט בע"מ`,
      },
      {
        src: require(`../assets/customers/מוסך שני האומנים ירושלים בעמ.jpg`),
        title: `מוסך שני האומנים ירושלים בע"מ`,
      },
      {
        src: require(`../assets/customers/און קור מאירי כפיר.jpg`),
        title: `און קור מאירי כפיר`,
      },
      {
        src: require(`../assets/customers/מושיתו הפחח 1998 בעמ.jpg`),
        title: `מושיתו הפחח 1998 בע"מ`,
      },
    ]
  },
  methods: {
    left() {
      console.log("left: ", this.$el.querySelector(".scroll-images"));
      const left = this.$el.querySelector(".scroll-images");
      left.scrollBy(-250, 0);
    },
    right() {
      console.log("right: ", this.$el.querySelector(".scroll-images"));
      const right = this.$el.querySelector(".scroll-images");
      right.scrollBy(250, 0);
    }
  }
  // props: {
  //   msg: String
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customers {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
  padding: 20Px 0;
}

.container {
  padding: 3% 0;
  /* height: 100%;
  width: 100%; */
}

h3 {
  text-align: center;
  margin: 40px;
}

.main-scroll {
  width: 90%;
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cover {
  position: relative;
  width: 90%;
  /* height: 50%; */
}

.cover::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  z-index: 99;
  height: 100%;
  width: 150px;
  background-image: linear-gradient(90deg, black, transparent);
}

.cover::after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  z-index: 99;
  height: 100%;
  width: 150px;
  background-image: linear-gradient(-90deg, black, transparent);
}

.scroll-images {
  width: 100%;
  height: auto;
  display: flex;
  gap: 30px;
  align-items: center;
  overflow: overlay;
  position: relative;
  scroll-behavior: smooth;
}

.child {
  min-width: 150px;
  height: 150px;
  overflow: hidden;
}

.scroll-images::-webkit-scrollbar {
  -webkit-appearance: none;
}

.child-img {
  background: white;
  width: 150px;
  height: 100%;
}

.icon {
  background-color: rgb(47, 57, 99);
  height: 50px;
  width: 50px;
  font-size: 50px;
  outline: none;
  border: none;
  padding: 0 20px;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .cover {
    width: 70%;
  }
}

@media only screen and (max-width: 400px) {

  .main-scroll {
    width: 90%;

  }

  .icon {
    padding: 0;
    height: 25px;
    width: 25px;
  }

  .child {
    min-width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .child-img {
    width: 100px;
    height: 100%;
  }

  .cover {
    width: 87%;
  }

  .cover::before,
  .cover::after {
    width: 50px;
  }

}
</style>
