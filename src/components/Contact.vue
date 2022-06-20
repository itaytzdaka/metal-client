<template>
  <div class="contact">
    <div class="box">
      <div class="flex-column contact-details">
        <div class="center">
          <p>טלפון<br /><br />
            03-5595936 , 03-5590294<br /><br />
            nor@017.net.il
          </p>
          <img src="../assets/png/contact.png" alt="contact">
        </div>

      </div>
      <form action="">
        <div class="container flex-column">
          <h2>יצירת קשר</h2>
          <input type="text" name="firstName" id="firstName" placeholder="שם פרטי">
          <input type="text" name="lastName" id="lastName" placeholder="שם משפחה">
          <input type="email" name="email" id="email" placeholder="אימייל">
          <input type="text" name="phone" id="phone" placeholder="טלפון">
          <textarea name="message" id="message" cols="30" rows="10" placeholder="הודעה"></textarea>
          <button>שלח</button>
        </div>

      </form>
    </div>
  </div>


</template>

<script>
export default {
  name: 'Contact',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  background: linear-gradient(54deg, rgba(2, 0, 36, 1) 0%, rgba(32, 119, 157, 1) 47%, rgba(0, 212, 255, 1) 100%);
  flex-grow: 1;
  display: grid;
  place-items: center;
}

.box {
  display: flex;
  margin: 5% 0;
  width: 72%;
  min-height: 80%;
  background: white;
  border-radius: 15px;
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
  height: 30px;
}

input[type=text],
input[type=email],
textarea {
  background: #dbdbdb;
  width: 50%;
  margin: 3% 0;
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
  background: #36b36e;
  border: none;
  border-radius: 15px;
  width: 30%;
  margin: 3% auto;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #277c4d;

}

img {
  width: 80%;
}

p {
  font-size: 1.5rem;
  position: relative;
  color: white;
  top: 30%;
  left: 10%;
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
}

@media only screen and (max-width: 450px) {

  input[type=text],
  input[type=email],
  textarea {
    width: 80%;
  }
}
</style>
