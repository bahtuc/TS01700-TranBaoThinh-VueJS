import { createRouter, createWebHistory } from 'vue-router'

import Post from '../views/Post.vue'
import Create from '../views/Create.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: Post },
  { path: '/posts/create', component: Create },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
