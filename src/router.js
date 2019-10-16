import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const Blogs = () => import('./views/Blogs.vue');
const BlogDetail = () => import('./views/BlogDetail.vue')
const AdminPage = () => import('./views/Admin.vue')
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs,
    },
    {
      path: '/blogs/:id',
      name: 'blogdetail',
      component: BlogDetail
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage
    },
  ]
})
