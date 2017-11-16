import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/',
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
        },
        {
          path: '/list',
          component: resolve => require(['../components/page/UserList.vue'], resolve)
        }
      ]
    }
  ]
});
