<template>
  <div id="nav">
     <nav>
    <div class="nav-wrapper">
      <router-link to="/"><a class="brand-logo"><img :src="image" width="154" height="55" margin-left="0px"></a></router-link>
      <a href="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/about"><a>About</a></router-link></li>
        <li><router-link to="/lectureHome"><a>Lecture Home</a></router-link></li>
        <li><a href="collapsible.html">Login</a></li>
        <li><a href="mobile.html">Join Class</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><router-link to="/about" style="color:white;">About</router-link></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  </div>
  <router-view/>
</template>

<script>
import image from "./assets/AppLogo.png"



export default {

  name: 'App',
  data: function(){
    return{
      image: image
    }
  },
  components: {
  }
}
</script>
<style>
body{
  color:white;
}
.nav-wrapper{
    background-color:#350B49;
    color:white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}

.sidenav {
  background-color:#4E2D68;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
