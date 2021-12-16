<template>
  <div class="lecturehome">
    <h1>Lecture Home</h1>
    <router-link to="/lecturerActivity"><a>View Activities</a></router-link>
    <div>
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase'
export default {
  data(){
    return{
      loggedIn: false
    }
  },
  methods:{
    async signOut(){
      try{
        const data = await firebase.auth().signOut()
        console.log(data)
        this.$router.replace({name: "login"})
      }
      catch(error){
        console.log(error)
      }
    
    }
  }

};
</script>