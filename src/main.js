import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDYipVLwE-yJmQ0wRgW8Gl6BksV0j4uyYM",
    authDomain: "engaged-app.firebaseapp.com",
    projectId: "engaged-app",
    storageBucket: "engaged-app.appspot.com",
    messagingSenderId: "155303329273",
    appId: "1:155303329273:web:167b05c1ebc68be924d128",
    measurementId: "G-BJ8J63WJTB"
};

firebase.initializeApp(firebaseConfig)

var loginChecker;


createApp(App).use(router).mount('#app')

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log("signed IN")
      loginChecker=true;
      router.push('lectureHome')
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Not signed in")
    }
  });
