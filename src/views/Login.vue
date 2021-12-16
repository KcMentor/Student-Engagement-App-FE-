<template>
  <div id="login-page" class="row">
    <div class="col s6 l4 offset-s3 offset-l4 card-panel my-color-card wrapper">
      <form class="login-form">
        <div class="row">
          <div class="col s12 center-align">
            <h2 style="color: #4e2d68">Lecturer Login</h2>
            <p style="font-size: 1vw">
              If You are a Student Please
              <router-link to="/join">Click Here</router-link> to Join a session
            </p>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mail_outline</i>
            <input class="validate" id="email" type="email" required="" />
            <label for="email" data-error="wrong" data-success="right"
              >Email</label
            >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input class="validate" id="password" type="password" required=""/>
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <button
              id="loginButton"
              v-on:click="login"
              class="
                btn
                waves-effect waves-purple
                col
                s4
                offset-s4
                my-color-back
              "
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  components: {},
  methods: {
    login: function () {
      var userEmail = document.getElementById("email").value;
      var userPassword = document.getElementById("password").value;

      firebase
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
        });
    },
  },
};

</script>

<style>
.input-field label {
  color: #4e2d68;
}
.my-color {
  color: #4e2d68;
}
.my-color-back {
  background-color: #4e2d68;
}
.my-color-card {
  background-color: #d1c4e9;
}
.material-icons.active {
  color: #4e2d68 !important;
}
/* label focus color */
.input-field input[type="email"]:focus + label {
  color: #4e2d68 !important;
}
.input-field input[type="password"]:focus + label {
  color: #4e2d68 !important;
}
/* label underline focus color */
.input-field input[type="password"]:focus {
  border-bottom: 1px solid #4e2d68 !important;
  box-shadow: 0 1px 0 0 #4e2d68 !important;
}
.input-field input[type="email"]:focus {
  border-bottom: 1px solid #4e2d68 !important;
  box-shadow: 0 1px 0 0 #4e2d68 !important;
}
.findbtn {
  background-color: #4e2d68 !important;
}
</style>