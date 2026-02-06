<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const login = () => {
    error.value = ''

    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find(
        u => u.email === email.value && u.password === password.value
    )

    if (!user) {
        error.value = 'Email hoặc mật khẩu không đúng'
        return
    }

    const token = 'token_' + Date.now()

    // ✅ LƯU AUTH ĐÚNG CHUẨN
    localStorage.setItem(
        'auth',
        JSON.stringify({
            isLogin: true,
            token,
            user: {
                name: user.name,
                email: user.email
            }
        })
    )

    router.push('/posts')
}
</script>

<template>
    <div class="col-md-4 mx-auto mt-5">
        <h2 class="mb-3 text-center">Đăng nhập</h2>

        <input v-model="email" type="email" class="form-control mb-2" placeholder="Email" />

        <input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu" />

        <p v-if="error" class="text-danger">{{ error }}</p>

        <button class="btn btn-success w-100" @click="login">
            Đăng nhập
        </button>
    </div>
</template>
