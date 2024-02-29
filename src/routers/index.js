import Vue from 'vue';
import VueRouter from 'vue-router';

// === VIEWS ===
import Index from '../views/Index.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Join from '../views/Join.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/join',
      component: Join
    },
    {
      path: '/home',
      component: Home,
    }
  ]
});

export default router;