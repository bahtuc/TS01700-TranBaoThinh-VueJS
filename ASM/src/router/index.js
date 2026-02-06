import { createRouter, createWebHistory } from 'vue-router'

import Post from '../views/Post.vue'
import PostDetail from '../views/PostDetail.vue'
import Create from '../views/Create.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import PostEdit from '../views/PostEdit.vue'

const routes = [
  { path: '/', redirect: '/posts' },

  {
    path: '/posts',
    name: 'Posts',
    component: Post
  },

  {
    path: '/post.:id',
    name: 'PostDetail',
    component: PostDetail
  },

  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  // 🔥 SỬA BÀI VIẾT
  {
    path: '/post-edit/:id',
    name: 'post-edit',
    component: PostEdit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ================= ROUTER GUARD =================
router.beforeEach((to, from, next) => {
  const data = localStorage.getItem('auth')
  const auth = data ? JSON.parse(data) : null

  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!auth || !auth.isLogin) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
