import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LectureHome from '../views/LectureHome'
import HomePage from '../views/Home'
import lecturerActivity from '../views/LectureActivity'
import Login from '../views/Login'
import Join from '../views/JoinSession'
import Analytics from '../views/Analytics'
import Session from '../views/Session'
import addQuest from '../views/AddQuestion'
import firebase from "firebase"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/lectureHome",
    name: "lectureHome",
    component: LectureHome,
    meta:{requiresAuth: true }
  },
  {
    path: "/addQuestion/:id",
    name: "addQuestion",
    component: addQuest ,
    meta:{requiresAuth: true }
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/lecturerActivity",
    name: "lecturerAcitivity",
    component: lecturerActivity,
    meta:{requiresAuth: true }
  },

  {
    path: "/analytics",
    name: "analytics",
    component: Analytics,
    meta:{requiresAuth: true }
  }, 

  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/session",
    name: "session",
    component: Session,
    meta:{requiresAuth: true }
  
  },
  {
    path: "/join",
    name: "join",
    component: Join
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  mode: "history",
})

router.beforeEach((to,from,next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const  isAthenticated = firebase.auth().currentUser;

  if(requiresAuth && !isAthenticated){
    next("/login");
  }
  else{
    next();
  }
})

export default router
