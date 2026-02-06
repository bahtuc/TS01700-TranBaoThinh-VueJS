<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const post = ref(null)

onMounted(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || []

    post.value = posts.find(p => p.id === route.params.id)

    if (!post.value) {
        alert('Không tìm thấy bài viết')
        router.push('/profile')
    }
})

const savePost = () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || []

    const index = posts.findIndex(p => p.id === post.value.id)
    if (index !== -1) {
        posts[index] = post.value
        localStorage.setItem('posts', JSON.stringify(posts))
    }

    router.push('/profile')
}
</script>

<template>
    <div class="container mt-5" v-if="post">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-sm">
                    <div class="card-header bg-warning text-dark">
                        <h5 class="mb-0">✏️ Chỉnh sửa bài viết</h5>
                    </div>

                    <div class="card-body">
                        <!-- TITLE -->
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tiêu đề</label>
                            <input type="text" class="form-control" v-model="post.title"
                                placeholder="Nhập tiêu đề bài viết" />
                        </div>

                        <!-- CONTENT -->
                        <div class="mb-3">
                            <label class="form-label fw-bold">Nội dung</label>
                            <textarea class="form-control" rows="6" v-model="post.content"
                                placeholder="Nhập nội dung bài viết"></textarea>
                        </div>

                        <!-- AUTHOR -->
                        <div class="mb-3">
                            <label class="form-label fw-bold">Tác giả</label>
                            <input type="text" class="form-control" :value="post.author" disabled />
                        </div>
                    </div>

                    <div class="card-footer d-flex justify-content-end gap-2">
                        <button class="btn btn-secondary" @click="$router.push('/profile')">
                            Hủy
                        </button>

                        <button class="btn btn-success" @click="savePost">
                            💾 Lưu thay đổi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
