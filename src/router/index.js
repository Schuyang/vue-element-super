/**
 * router配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import * as Views from './views'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {path: '/', component: Views.Login},
    {path: '*', component: Views.Error404},
    // login
    {path: '/login', component: Views.Login},
    // error page
    {path: '/403', component: Views.Error403},
    {path: '/404', component: Views.Error404},
    {
      path: '/index', component: Views.Layout,
      children:
        [
          // home
          {path: '/home', component: Views.Home},
          // sysmgr
          {path: "/sysmgr/user", component: Views.User},
          {path: "/sysmgr/role", component: Views.Role},
          // monitor
          {path: "/monitor/login-log", component: Views.LoginLog},
          // error
          {path: "/error/403", component: Views.Error403},
          {path: "/error/404", component: Views.Error404},
        ]
    },
  ]
});

export default router
