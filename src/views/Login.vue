<template>
  <div id="login-page" class="row" style="width:100vw">
    <div class="col s6 l4 offset-s3 offset-l4 card-panel my-color-card wrapper">
      <form class="login-form">
        <div class="row" >
          <div class="col s12 center-align">
          <h2 style="color:#4e2d68;font-size:5vw;">Lecturer Login</h2>
          <p style="font-size:2vw;">If You are a Student Please <router-link to="/join">Click Here</router-link> to Join a session</p>
          <p v-if="Invalid" style="font-size:2vw;color:red;">The Credentials entered are not Valid</p>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">mail_outline</i>
            <input class="validate" id="email" type="email">
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">lock_outline</i>
            <input id="password" type="password">
            <label for="password" >Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <button id="loginButton" v-on:click="login" class="btn waves-effect waves-purple  col s12  my-color-back ">Login</button>
          </div>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import M from 'materialize-css'

export default {
  data: function(){
    return{
      Invalid : false
    }
  },
  name: "Login",
  components: {},
  mounted(){
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
  });
  },
  methods: {
    login: function(){
      var userEmail = document.getElementById("email").value;
      var userPass = document.getElementById("password").value;

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then((userCredential) => {
        //Signed in
        var user = userCredential.user;
      }).catch((error) => {
        this.Invalid = true;
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      })
    }
  }
}
</script>

<style>

 .input-field label {
     color: #4e2d68;
}
.my-color{
          color: #4E2D68
        }
.my-color-back{
          background-color: #4E2D68
}
.my-color-card{
          background-color:#d1c4e9
        }
  .material-icons.active {
  color: #4e2d68 !important;
  }
   /* label focus color */
   .input-field input[type=email]:focus + label {
     color: #4E2D68 !important;
}
  .input-field input[type=password]:focus + label {
     color: #4E2D68 !important;
}
/* label underline focus color */
.input-field input[type=password]:focus {
     border-bottom: 1px solid #4E2D68 !important;
     box-shadow: 0 1px 0 0 #4E2D68 !important;
   }
.input-field input[type=email]:focus {
     border-bottom: 1px solid #4E2D68 !important;
     box-shadow: 0 1px 0 0 #4E2D68 !important;
}
.findbtn{
  background-color:#4E2D68 !important;
}
</style>