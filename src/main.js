import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
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

<<<<<<< HEAD
const realTimeDb = getDatabase(app);
const fireStoreDb = getFirestore();

async function createQuestionBank(db, collection, docs) {
    await setDoc(doc(db, collection, docs.name), docs);
}

async function removeQuestion(db, collection, docs) {
    await deleteDoc(doc(db, collection, docs.name))
}

async function removeQuestionBank(db, collection, docs) {
    await deleteDoc(doc(db, collection, docs.name))
}


=======
// const database = getDatabase(app);
>>>>>>> cfa1a92ad29424a2e7ae1bac7d511d1e1606e6dc

createApp(App).use(router).mount('#app')