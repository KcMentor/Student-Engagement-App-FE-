<template>
<div id='App'>
 <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img :src="image" width="154" height="55" margin-left="0px"></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/home"><a>Home</a></router-link></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>

  <router-view />
</div>
</template>

<script>
import image from "./assets/AppLogo.png"
//import HomePage from "./components/HomePage.vue"
//import Login from "./components/Login.vue"


export default {

  name: 'App',
  data: function(){
    return{
      image: image
    }
  },
  components: {
  //HomePage,
  //Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  
}
.nav-wrapper{
    background-color:#350B49;
}
</style>
