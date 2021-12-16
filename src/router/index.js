import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LectureHome from '../views/LectureHome'
import HomePage from '../views/Home'
import lecturerActivity from '../views/LectureActivity'
import Login from '../views/Login'
import Join from '../views/JoinSession'
import Analytics from '../views/Analytics'
import LectureSession from '../views/LectureSession'
import LectureScreen from '../views/LectureScreen'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/lectureHome",
    name: "lectureHome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LectureHome
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/lecturerActivity",
    name: "lecturerAcitivity",
    component: lecturerActivity
  },

  {
    path: "/analytics",
    name: "analytics",
    component: Analytics
  }, 

  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/lectureSession",
    name: "lectrueSession",
    component: LectureSession
  },
  {
    path: "/lectureScreen",
    name: "lectrueScreen",
    component: LectureScreen
  },
  {
    path: "/join",
    name: "join",
    component: Join
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
