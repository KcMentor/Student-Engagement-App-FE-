import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import Home from './components/HomePage.vue';


const routes = [
    {
        path: '/', component: App
    },
    {
        path:'/home', component: Home
    }
];

const router = new VueRouter({
    routes
});


createApp(App).use(router).mount('#app')

