<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ===== STATE =====
const auth = ref(null)
const user = ref(null)
const posts = ref([])
const myPosts = ref([])

// ===== MODAL =====
const showDeleteModal = ref(false)
const showEditModal = ref(false)
const selectedPost = ref(null)

// ===== LOAD DATA =====
onMounted(() => {
    // AUTH
    const authData = localStorage.getItem('auth')
    auth.value = authData ? JSON.parse(authData) : null

    if (!auth.value?.isLogin) {
        router.push('/login')
        return
    }

    // USERS
    const users = JSON.parse(localStorage.getItem('users')) || []
    user.value = users.find(u => u.email === auth.value.user.email)

    if (!user.value) return

    // POSTS
    posts.value = JSON.parse(localStorage.getItem('posts')) || []

    myPosts.value = posts.value.filter(
        p => p.author === user.value.email
    )
})

// ===== AVATAR =====
const avatarUrl = computed(() => {
    try {
        if (!user.value?.avatar) {
            return new URL('../assets/image/test.jpg', import.meta.url).href
        }
        return new URL(`../assets/image/${user.value.avatar}`, import.meta.url).href
    } catch {
        return ''
    }
})

// ===== OPEN MODAL =====
const openDelete = (post) => {
    selectedPost.value = post
    showDeleteModal.value = true
}

const openEdit = (post) => {
    selectedPost.value = post
    showEditModal.value = true
}

// ===== CONFIRM DELETE =====
const confirmDelete = () => {
    if (!selectedPost.value) return

    const newPosts = posts.value.filter(
        p => p.id !== selectedPost.value.id
    )

    localStorage.setItem('posts', JSON.stringify(newPosts))

    posts.value = newPosts
    myPosts.value = newPosts.filter(
        p => p.author === user.value.email
    )

    showDeleteModal.value = false
    selectedPost.value = null
}

// ===== CONFIRM EDIT =====
const confirmEdit = () => {
    if (!selectedPost.value) return

    showEditModal.value = false
    router.push(`/post-edit/${selectedPost.value.id}`)
}
</script>

<template>
    <div class="container mt-4">
        <!-- PROFILE -->
        <div v-if="user" class="profile card mb-4 p-3 d-flex align-items-center gap-3">
            <img :src="avatarUrl" alt="User avatar" width="100" height="100" class="rounded-circle" />
            <div>
                <p><strong>Name:</strong> {{ user.name }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
            </div>
        </div>

        <!-- POST LIST -->
        <h4>Bài viết của bạn</h4>

        <div v-if="myPosts.length">
            <div v-for="post in myPosts" :key="post.id" class="card mb-3 p-3">
                <h5>{{ post.title }}</h5>
                <p class="text-muted">
                    {{ post.content?.slice(0, 120) }}...
                </p>

                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-warning" @click="openEdit(post)">
                        ✏️ Sửa
                    </button>
                    <button class="btn btn-sm btn-danger" @click="openDelete(post)">
                        🗑 Xóa
                    </button>
                </div>
            </div>
        </div>

        <div v-else class="alert alert-secondary">
            Bạn chưa có bài viết nào
        </div>
    </div>

    <!-- DELETE MODAL -->
    <div v-if="showDeleteModal" class="modal-backdrop">
        <div class="modal-box">
            <h5>Xác nhận xóa</h5>
            <p class="text-muted">{{ selectedPost?.title }}</p>

            <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-secondary" @click="showDeleteModal = false">
                    Hủy
                </button>
                <button class="btn btn-danger" @click="confirmDelete">
                    Xóa
                </button>
            </div>
        </div>
    </div>

    <!-- EDIT MODAL -->
    <div v-if="showEditModal" class="modal-backdrop">
        <div class="modal-box">
            <h5>Sửa bài viết</h5>
            <p class="fw-bold">{{ selectedPost?.title }}</p>

            <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-secondary" @click="showEditModal = false">
                    Hủy
                </button>
                <button class="btn btn-warning" @click="confirmEdit">
                    Đi tới trang sửa
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile {
    flex-direction: row;
}

img {
    object-fit: cover;
}

/* MODAL */
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal-box {
    background: #fff;
    padding: 20px;
    width: 400px;
    border-radius: 8px;
}
</style>
