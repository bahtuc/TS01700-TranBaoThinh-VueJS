<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const email = ref('')
const password = ref('')


const login = () => {
localStorage.setItem('user', JSON.stringify({ name: email.value }))
router.push('/posts')
}
</script>


<template>
<div class="col-md-4 mx-auto">
<h2>Đăng nhập</h2>
<input v-model="email" class="form-control mb-2" placeholder="Email" />
<input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu" />
<button class="btn btn-success w-100" @click="login">Đăng nhập</button>
</div>
</template>