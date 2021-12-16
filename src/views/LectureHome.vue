<template>
  <div class="lecturehome">
    <h1>Lecture Home</h1>
    <router-link to="/lecturerActivity"><a>View Activities</a></router-link>
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
    
    }

};
</script>