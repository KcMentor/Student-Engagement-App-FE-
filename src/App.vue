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
          <li v-if="!LoggedIn"><router-link to="/login">Login</router-link></li>
          <li v-else><a v-on:click="logout">Logout</a></li>
          <li><router-link to="/join">Join Session</router-link></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/lectureHome"><a>Lecture Home</a></router-link>
      </li>
      <li v-if="!LoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-else><a v-on:click="logout">Logout</a></li>
      <li><a href="/join">Join Class</a></li>
    </ul>
  </div>
  <router-view />
</template>

<script>
import image from "./assets/AppLogo.png"
import M from 'materialize-css'
import firebase from 'firebase'
import "firebase/auth";
import router from './router';

export default {
  name: "Home",
  data: function () {
    return {
      image: image,
      LoggedIn : false
    };
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      this.LoggedIn = true;
      console.log("signed IN")
      router.push({name: 'lectureHome', params: { id: '123'}})
      // ...
    } else {
      // User is signed out
      // ...
      this.LoggedIn = false;
      console.log("Not signed in")
    }
  });
    
  },
  components: {},

  methods: {
    logout: function(){
      firebase.auth().signOut().then(() =>{
        router.push('Home')
      }).catch((error) => {
        console.log(error)
      })
    }
  },
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
