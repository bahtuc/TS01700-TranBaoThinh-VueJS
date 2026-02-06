<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// ================= AUTH =================
const auth = ref(null)

onMounted(() => {
    const data = localStorage.getItem('auth')
    auth.value = data ? JSON.parse(data) : null
})

// ================= POST ID =================
const postId = route.path.split('.').pop() // post.p01 -> p01

// ================= COMMENTS =================
const comments = ref([])
const newComment = ref('')

const loadComments = () => {
    const data = localStorage.getItem('comments')
    const all = data ? JSON.parse(data) : []
    comments.value = all.filter(c => c.postid === postId)
}

onMounted(loadComments)

// ================= USERNAME =================
const username = computed(() => {
    return auth.value?.name || 'Ẩn danh'
})

// ================= CREATE COMMENT =================
const addComment = () => {
    if (!isLogin.value) return
    if (!newComment.value.trim()) return

    const all = JSON.parse(localStorage.getItem('comments')) || []

    all.push({
        postid: postId,
        username: username.value,
        comment: newComment.value
    })

    localStorage.setItem('comments', JSON.stringify(all))
    newComment.value = ''
    loadComments()
}


// ================= CHECK LOGIN =================
const isLogin = computed(() => auth.value?.isLogin)

// ================= GO LOGIN =================
const goLogin = () => {
    router.push({
        name: 'Login',
        query: { redirect: route.fullPath }
    })
}
</script>


<template>
    <div class="comment-box mt-4">

        <h4 class="mb-3">Bình luận</h4>

        <!-- Danh sách bình luận -->
        <div v-if="comments.length" class="list-group mb-4">
            <div v-for="(c, index) in comments" :key="index" class="list-group-item">
                <div class="fw-bold text-primary">
                    {{ c.username }}
                </div>
                <div class="text-muted">
                    {{ c.comment }}
                </div>
            </div>
        </div>

        <!-- Chưa có bình luận -->
        <div v-else class="alert alert-secondary">
            Chưa có bình luận nào
        </div>

        <!-- Form bình luận -->
        <div v-if="isLogin" class="card">
            <div class="card-body">
                <div class="mb-3">
                    <textarea v-model="newComment" class="form-control" rows="3"
                        placeholder="Nhập bình luận..."></textarea>
                </div>

                <button class="btn btn-primary" @click="addComment">
                    Gửi bình luận
                </button>
            </div>
        </div>

        <!-- Chưa đăng nhập -->
        <div v-else class="alert alert-warning mt-3 d-flex justify-content-between align-items-center">
            <span>Bạn cần đăng nhập để bình luận</span>
            <button class="btn btn-sm btn-primary" @click="goLogin">
                Đăng nhập
            </button>
        </div>


    </div>
</template>


<style scoped>
.comment-item {
    margin-bottom: 12px;
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

textarea {
    width: 100%;
    min-height: 80px;
}
</style>
