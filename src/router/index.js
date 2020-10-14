import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home from '../views/Home.vue'
// 登录
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  routes
})

export default router
