import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import App from '../App.vue';

const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/home',
        redirect: '/'
      },
      {
        path:'/',
        name: 'home',
        component: Home
      }
    ]
  }
]

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})