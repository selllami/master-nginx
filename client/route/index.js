import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
});

export default router;