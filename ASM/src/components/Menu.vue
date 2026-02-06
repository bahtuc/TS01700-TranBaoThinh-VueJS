<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// ✅ dùng ref để reactive
const user = ref(null)

// ✅ hàm sync từ localStorage
const loadUser = () => {
    const auth = localStorage.getItem('auth')
    user.value = auth ? JSON.parse(auth).user : null
}

// load lần đầu + mỗi lần đổi route
loadUser()
router.afterEach(() => loadUser())

const logout = () => {
    localStorage.removeItem('auth')
    user.value = null
    router.push('/login')
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" to="/posts">POLY_Blog</router-link>

            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/posts">Bài viết</router-link>
                </li>

                <li class="nav-item" v-if="user">
                    <router-link class="nav-link" to="/create">Viết bài</router-link>
                </li>

                <li class="nav-item" v-if="!user">
                    <router-link class="nav-link" to="/login">Đăng nhập</router-link>
                </li>

                <li class="nav-item" v-if="!user">
                    <router-link class="nav-link" to="/register">Đăng ký</router-link>
                </li>

                <li class="nav-item dropdown" v-if="user">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                        {{ user.name }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link class="dropdown-item" to="/profile">
                                Tài Khoản
                            </router-link>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" @click.prevent="logout">
                                Đăng xuất
                            </a>
                        </li>

                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>
