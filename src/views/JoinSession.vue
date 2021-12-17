<template>
  <div id="login-page" class="row" style="width:100vw">
    <div class="col s6 l4 offset-s3 offset-l4 card-panel my-color-card wrapper">
      <form class="login-form">
        <div class="row" >
          <div class="col s12 center-align">
          <h2 style="color:#4e2d68;font-size:5vw;">Join A Session</h2>
          <p style="font-size:2vw;">If You are a lecturer please <router-link to="/login">Click Here</router-link> to Login</p>
          <p v-if="Invalid" style="font-size:2vw;color:red;">Invalid Session Code</p>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <i class="material-icons prefix">confirmation_number</i>
            <input class="validate" id="sessionCode" type="text">
            <label for="sessionCode" data-error="wrong" data-success="right">Session Code</label>
          </div>
        </div>
        <div class="row">
        <div class="input-field col s6">
          <input  id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
        <div class="row">
          <div class="input-field col s12">
             <a class="btn waves-effect waves-purple col s12  my-color-back">
              <router-link :to="'/session/' + this.code ">Join Session</router-link>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import M from "materialize-css";
import firebase from 'firebase';
import "firebase/auth";
import db from '../main.js'
export default {
  data: function () {
    return{
      code: null
    }
  },
  mounted(){
      this.code = document.getElementById("sesssionCode").value
      console.log(this.code)
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
   .input-field input[type=text]:focus + label {
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
.input-field input[type=text]:focus {
     border-bottom: 1px solid #4E2D68 !important;
     box-shadow: 0 1px 0 0 #4E2D68 !important;
}
.findbtn{
  background-color:#4E2D68 !important;
}
</style>