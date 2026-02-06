<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const checkpass = ref('')

const register = () => {
  // Validate rỗng
  if (!name.value || !email.value || !password.value || !checkpass.value) {
    alert('Vui lòng nhập đầy đủ thông tin')
    return
  }

  // Check mật khẩu
  if (password.value !== checkpass.value) {
    alert('Mật khẩu xác nhận không khớp')
    return
  }


  // Lấy danh sách user hiện có
  const users = JSON.parse(localStorage.getItem('users')) || []

  // Check trùng email
  const exists = users.find(u => u.email === email.value)
  if (exists) {
    alert('Email đã tồn tại')
    return
  }

  // Thêm user mới
  users.push({
    name: name.value,
    email: email.value,
    password: password.value
  })

  // Lưu lại
  localStorage.setItem('users', JSON.stringify(users))

  alert('Đăng ký thành công!')
  router.push('/login')
}
</script>

<template>
  <div class="col-md-4 mx-auto mt-5">
    <h2 class="mb-3 text-center">Đăng ký</h2>

    <input v-model="name" class="form-control mb-2" placeholder="Tên" />

    <input v-model="email" type="email" class="form-control mb-2" placeholder="Email" />

    <input v-model="password" type="password" class="form-control mb-2" placeholder="Mật khẩu" />

    <input v-model="checkpass" type="password" class="form-control mb-3" placeholder="Xác nhận mật khẩu" />

    <button class="btn btn-primary w-100" @click="register">
      Đăng ký
    </button>
  </div>
</template>
