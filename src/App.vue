<template>
  <div id="homepage">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/"
          ><a class="brand-logo"
            ><img :src="image" width="154" height="55" margin-left="0px" /></a
        ></router-link>
        <a href="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/analytics">Analytics</router-link></li>
          <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
          <li v-else><a v-on:click="logout">Logout</a></li>
          <li><router-link to="/join">Join Session</router-link></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/lectureHome"><a>Lecture Home</a></router-link>
      </li>
      <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
      <li v-else><a v-on:click="logout">Logout</a></li>
      <li><a href="/join">Join Class</a></li>
    </ul>
  </div>
  <router-view />
</template>

<script>
import image from "./assets/AppLogo.png"
import firebase from 'firebase'
import router from './router';

export default {
  name: "Home",
  data: function () {
    return {
      image: image,
      loggedIn: false
  
    };
  },
  mounted(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.loggedIn = true;
      }
      else{
        this.logged = false;
      }
    })
  }
};
</script>

<style scoped>
body {
  color: white;
}

.nav-wrapper {
  background-color: #350b49;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.sidenav {
  background-color: #4e2d68;
}


  
#nav a.router-link-exact-active {
  color: #4e2d68;
}
</style>
