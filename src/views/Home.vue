<template>
<div class="container">
  <div class="row">
    <h2 class="center-align" style="font-size:3vw;margin:1vh;">Welcome to Engaged</h2>
    <p class="center-align" style="font-size:2vw">Please Select an Option Below to Access the application. Students can only join lecture sessions using the link provided by their lecturer.</p>
  </div>
</div>

  <div class="container center-align selection" style="background-color:#d1c4e9;width:65vw;">
   <div class="row option" >
    <div class="col s12 center align" >
   <p style="font-size:5vw;margin:0px;color:#350b49">Lecturers</p>
   <i class="material-icons" style="font-size:15vw;">school</i>
   <div class="input-field">
            <router-link to="/login"><a class="btn waves-effect waves-purple my-color-back" style="width:20vw">Login</a></router-link>
   </div>
   </div>
   </div>
   <div class="row option" style="">
   <div class="col s6 m6 offset-s3 offset-m3">
     <p style="font-size:5vw;margin:0px;color:#350b49;">Students</p>
   <i class="material-icons " style="font-size:15vw;">people</i>
   <div class="input-field">
            <router-link to="/join"><a class="btn waves-effect waves-purple my-color-back" style="width:20vw">Join Session</a></router-link>
   </div>
   </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  components: {
  }
}
</script>

<style>
.selection{
  border: 10px solid #350b49;
  border-radius: 25px;
  width:75%;
}
.option{
  border: 2px solid #350b49;
  border-radius: 25px;
  margin:10px;
}
.btn:hover{
  background-color:#7b1fa2 ;
}
</style>
