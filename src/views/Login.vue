<template>
  <div id="login-page" class="row">
    <div class="col s6 l4 offset-s3 offset-l4 card-panel my-color-card wrapper">
      <form class="login-form">
        <div class="row" >
          <div class="col s12 center-align">
          <h2 style="color:#4e2d68">Lecturer Login</h2>

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
            <a href="#" class="btn waves-effect waves-purple col s4 offset-s4 my-color-back">Login</a>
          </div>
        </div>


      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper{
  margin: 0;
  position: absolute;
  top: 35%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
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