<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const user = ref(JSON.parse(localStorage.getItem('user')))


const logout = () => {
    localStorage.removeItem('user')
    user.value = null
    router.push('/login')
}
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" to="/posts">Blog</router-link>


            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/posts">Bài viết</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/posts/create">Viết bài</router-link>
                </li>


                <li class="nav-item" v-if="!user">
                    <router-link class="nav-link" to="/login">Đăng nhập</router-link>
                </li>
                <li class="nav-item" v-if="!user">
                    <router-link class="nav-link" to="/register">Đăng ký</router-link>
                </li>


                <li class="nav-item dropdown" v-if="user">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{ user.name }}</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" @click.prevent="logout">Đăng xuất</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>