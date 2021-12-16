import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import { doc, setDoc, deleteDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDYipVLwE-yJmQ0wRgW8Gl6BksV0j4uyYM",
    authDomain: "engaged-app.firebaseapp.com",
    projectId: "engaged-app",
    databaseURL: "https://engaged-app-default-rtdb.firebaseio.com/",
    storageBucket: "engaged-app.appspot.com",
    messagingSenderId: "155303329273",
    appId: "1:155303329273:web:167b05c1ebc68be924d128",
    measurementId: "G-BJ8J63WJTB"
};

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore();

async function createQuestionBank(db, collection, docs) {
    await setDoc(doc(db, collection, docs.name), docs);
}

async function removeQuestion(db, collection, docs) {
    await deleteDoc(doc(db, collection, docs.name))
}

async function removeQuestionBank(db, collection, docs) {
    await deleteDoc(doc(db, collection, docs.name))
}

export default db;

createApp(App).use(router).mount('#app')