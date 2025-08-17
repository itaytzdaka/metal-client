<template>
  <div class="contact">
    <div class="box">
      <div class="flex-column contact-details">

        <div class="letter-container">
          <div class="letter">
            <p>טלפון</p>
            <p>03-5595936</p>
            <p>03-5590294</p>
          </div>
          <img class="phone" src="../assets/svg/phone.svg" alt="My Happy SVG" />
        </div>


        <!-- <div class="center">


          <img src="../assets/png/contact.png" alt="contact">
        </div> -->

      </div>
      <form @submit="sendEmail">
        <div class="container flex-column">
          <h2>יצירת קשר</h2>
          <input type="text" name="firstName" id="firstName" placeholder="שם פרטי" v-model="firstName">
          <input type="text" name="lastName" id="lastName" placeholder="שם משפחה" v-model="lastName">
          <input type="email" name="email" id="email" placeholder="אימייל" v-model="email">
          <input type="text" name="phone" id="phone" placeholder="טלפון" v-model="phone">
          <textarea name="message" id="message" cols="30" rows="10" placeholder="הודעה" v-model="message"></textarea>
          <button>שלח</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Contact',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    async sendEmail(e) {
      e.preventDefault();
      try {
        // await emailjs.sendForm('service_uvwy2jp', 'template_zpwpnpo', e.target, 'Kbv6svu_53GSgKW4w',{
        //   from_name: this.firstName +" "+ this.lastName,
        //   email: this.email,
        //   phone: this.phone,
        //   message: this.message
        // });
        if (this.formValidation().isValid) {
          await emailjs.sendForm('service_uvwy2jp', 'template_zpwpnpo', e.target, 'Kbv6svu_53GSgKW4w');
          alert("ההודעה נשלחה");

          // Reset form field
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.phone = '';
          this.message = '';
        }

        else{
          alert(this.formValidation().errorMessage);
        }


      } catch (error) {
        alert("התרחשה שגיאה");
        console.log("error: ", { error })
      }

    },

    formValidation() {

      let formStatus = {
        isValid: true,
        errorMessage: ''
      };

      if (!this.firstName || !this.lastName || !this.email || !this.phone || !this.message) {
        formStatus.isValid = false;
        formStatus.errorMessage= "יש למלא את כל השדות"
      }

      else if(this.firstName.length>30 || this.lastName.length>30 | this.email.length>30 || this.phone.length>20 || this.message.length>100 ){
        formStatus.isValid = false;
        formStatus.errorMessage= "יותר מדי מלל באחת מתיבות הטקסט"
      }

      return formStatus;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  background-image: url("../assets/jpg/contact.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background: linear-gradient(54deg, rgba(2, 0, 36, 1) 0%, rgba(32, 119, 157, 1) 47%, rgba(0, 212, 255, 1) 100%); */
  flex-grow: 1;
  display: grid;
  place-items: center;
}

.box {
  display: flex;
  margin: 5% 0;
  padding: 5% 0;
  width: 72%;
  min-height: 80%;
  background: rgba(255, 255, 255, 0.651);
  border-radius: 5px;
  box-shadow: 0 2px 20px rgba(2, 0, 36, 0.5);
}



form {
  display: grid;
  width: 50%;
}


.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.contact-details {
  justify-content: space-around;
  width: 50%;
}

input {
  height: 40px;
}

input[type=text],
input[type=email],
textarea {
  background: #dbdbdb;
  width: 65%;
  margin: 2% 0;
  border: none;
  border-radius: 5px;
  text-align: center;
  font: inherit;
  resize: none;
}

.center {
  text-align: center;
}

h2 {
  margin: 5% 0;
}

button {
  color: white;
  padding: 10px 20px;
  background: #6c327e;
  border: none;
  border-radius: 15px;
  width: 30%;
  margin: 3% auto;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #912e78;

}

img {
  width: 80%;
}

.letter-container {
  display: flex;
  justify-content: center;
  /* background-color: green; */
  position: relative;
  width: 80%;
  padding-top: 60%;

  /* 16:9 Aspect Ratio */
}

.letter {
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10% 0;
  top: 0;
  width: 70%;
  height: 67%;
  background: #2a337e;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
}

.letter::after {
  content: "";
  position: absolute;
  top: -68%;
  right: 11%;
  background-color: #23295a;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 13px;
  transform: rotate(49deg) skewY(-10deg);
}

.letter::before {
  content: "";
  position: absolute;
  bottom: -70%;
  right: -13%;
  background-color: #23295a;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 15px;
  transform: rotate(53deg) skewY(-15deg);
}

.letter p {
  position: relative;
  color: white;
  font-size: 1.5vw;
  z-index: 3;
}

.phone {
  position: absolute;
  top: 17%;
  left: -4%;
  z-index: 2;
}


@media only screen and (max-width: 1200px) {
  .box {
    width: 82%;
    flex-direction: column;
    align-items: center;
  }

  .container {
    width: 100%;
  }
}

@media only screen and (max-width: 900px) {

  form,
  .contact-details {
    width: 90%;
  }

  img {
    width: 60%;

  }

  .letter p {
    font-size: 2.5vw;
  }

  input[type=text],
  input[type=email],
  textarea {
    width: 80%;
  }

}

@media only screen and (max-width: 450px) {

  .box {
    width: 100%;
    margin: 0;
    border-radius: 0;
    box-shadow: none;

  }

  input[type=text],
  input[type=email],
  textarea {
    width: 80%;
  }

  .letter p {
    font-size: 3vw;
  }
}
</style>
