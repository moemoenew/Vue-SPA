import Vue from 'vue'
import VueRouter from 'vue-router'

/* Load layout views */
/*
import Category from './theme/Category.vue'
import About from './theme/About.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'
*/

/* Lazy loading */
const Category = () => System.import('./theme/Category.vue')
const About = () => System.import('./theme/About.vue')
const Login = () => System.import('./theme/Login.vue')
const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [{
    path: '/category/:id',
    name: 'category',
    component: Category
  },
  {
    path: '/',
    redirect: '/category/front-end'
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }]
})

export default router
