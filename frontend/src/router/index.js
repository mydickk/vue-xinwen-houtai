import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../components/layout/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/HelloWorld.vue'], resolve)
        },
        {
          path: '/menu',
          component: resolve => require(['../components/page/Menu.vue'], resolve)
        }
      ]
    }
  ]
});
