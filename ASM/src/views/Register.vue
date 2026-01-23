<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const checkpass = ref('')   // ✅ BỔ SUNG

const register = () => {
  if (!name.value || !email.value || !password.value || !checkpass.value) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return
  }

  if (password.value !== checkpass.value) {
    alert('Mật khẩu xác nhận không khớp')
    return
  }

  // Demo: chưa gọi API
  alert('Đăng ký thành công!')
  router.push('/login')
}
</script>

<template>
  <div class="col-md-4 mx-auto">
    <h2 class="mb-3 text-center">Đăng ký</h2>

    <input
      v-model="name"
      class="form-control mb-2"
      placeholder="Tên"
    />

    <input
      v-model="email"
      type="email"
      class="form-control mb-2"
      placeholder="Email"
    />

    <input
      v-model="password"
      type="password"
      class="form-control mb-2"
      placeholder="Mật khẩu"
    />

    <input
      v-model="checkpass"
      type="password"
      class="form-control mb-3"
      placeholder="Xác nhận mật khẩu"
    />

    <button class="btn btn-primary w-100" @click="register">
      Đăng ký
    </button>
  </div>
</template>
