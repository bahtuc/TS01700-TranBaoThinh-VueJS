<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ================= AUTH =================
const auth = ref(null)

onMounted(() => {
    const data = localStorage.getItem('auth')
    auth.value = data ? JSON.parse(data) : null

    if (!auth.value || !auth.value.isLogin) {
        router.push('/login')
    }
})

// ================= FORM =================
const title = ref('')
const content = ref('')
const image = ref('') // CHỈ LƯU TÊN FILE

// ================= UPLOAD IMAGE =================
const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    // chỉ lấy tên file
    image.value = file.name
}

// ================= SUBMIT =================
const submitPost = () => {
    if (!title.value.trim() || !content.value.trim()) {
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || []

    const newPost = {
        id: Date.now(),
        title: title.value.trim(),
        content: content.value.trim(),
        author: auth.value.user.email,
        image: image.value, // vd: post.jpg
        createdAt: new Date().toLocaleString()
    }

    posts.unshift(newPost)
    localStorage.setItem('posts', JSON.stringify(posts))

    alert('Đã tạo bài viết!')
    router.push('/posts')
}
</script>

<template>
    <div class="container mt-4" v-if="auth">
        <h2 class="mb-3">Tạo bài viết</h2>

        <input v-model="title" class="form-control mb-3" placeholder="Tiêu đề" />

        <textarea v-model="content" class="form-control mb-3" rows="6" placeholder="Nội dung"></textarea>

        <!-- Chọn ảnh (chỉ lấy tên file) -->
        <input type="file" class="form-control mb-3" accept="image/*" @change="handleImageUpload" />

        <p v-if="image" class="text-muted">
            Ảnh đã chọn: <strong>{{ image }}</strong>
        </p>

        <p class="text-muted">
            <strong>Tác giả:</strong> {{ auth.user.email }}
        </p>

        <button class="btn btn-primary" :disabled="!title.trim() || !content.trim()" @click="submitPost">
            Đăng bài
        </button>
    </div>
</template> 