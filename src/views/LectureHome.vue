<template>
  <div class="container" style="margin-left:0.5vw;margin-top:0.5vw">
    
    <div class="row" >
      <div class="col s5 m3 l3 Date" style="background-color:#350b49;position:sticky;margin-top:3px;" >
      <p class="center-align" style="margin:0;">Date: {{date}}</p>
      <p class="center-align" style="margin:0;">Time: {{time}} (24hrs)</p>
    </div>
  </div>
  </div>
  <div class="container center-align selection" style="background-color:#d1c4e9;width:100vw;height:26vh;">
   <div class="row option" >
    <div class="col s12 center align" >
   <p style="font-size:5vw;margin:0px;color:#350b49">Session Wizard</p>
   <i class="material-icons" style="font-size:15vw;">school</i>
   <div class="input-field">
            <router-link to="/login"><a class="btn waves-effect waves-purple my-color-back" style="width:20vw;margin-bottom:0vh;">Start Session</a></router-link>
   </div>
   </div>
   </div>
  </div>



   


      <div class=" card-panel my-color-card class-engagement-wrapper">
        <table class="highlight centered responsive-table">
            <thead>
            <tr>
                <th>LAST CLASS ENGAGEMENT</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>N/A</td>
            </tr>
            </tbody>
        </table>
    </div>
   
      <div class=" card-panel my-color-card student-engaged-wrapper ">
        <table class="highlight centered responsive-table">
            <thead>
            <tr>
                <th>MOST ENGAGED STUDENT</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>N/A</td>
            </tr>
            </tbody>
        </table>
    </div>
    

    
</template>

<script>

import firebase from 'firebase'
export default {
  data(){
    return{
      loggedIn: false,
      date: null,
      time:null
    }
  },
   methods:{
        currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes().toString().padStart(2,'0'); 
      
      this.time = time;
      this.date = date;
    },
   },
    mounted(){
      this.currentDateTime();

    }

};
</script>

<style>
.Date{
  border: 1px solid #350b49 ;
  border-radius: 5px;
  margin:0px;
}

</style>

<!-- <div class="buttons-group right-align">
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Monday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Tuesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Wednesday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Thursday</a>
        <a class="waves-effect waves-light btn-large deep-purple lighten-1 button-individual">Friday</a>
      </div> -->
