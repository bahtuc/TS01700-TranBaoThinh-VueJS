<script setup>
import { ref, onMounted } from 'vue'

// Danh sách bài viết
const posts = ref([])

onMounted(() => {
    try {
        const data = localStorage.getItem('posts')
        posts.value = data ? JSON.parse(data) : []
    } catch (e) {
        console.error('Lỗi parse posts từ localStorage', e)
        posts.value = []
    }
})

// Hàm xử lý đường dẫn ảnh
const getImage = (image) => {
    return new URL(`../assets/image/${image}`, import.meta.url).href
}
</script>

<template>
    <div class="container mt-3">
        <h2 class="mb-3">Bài viết</h2>

        <!-- Trạng thái rỗng -->
        <div v-if="posts.length === 0" class="alert alert-info">
            Chưa có bài viết nào.
        </div>

        <!-- Danh sách bài viết -->
        <div v-else class="card mb-3" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <div class="row align-items-center">
                    <!-- Ảnh bên trái -->
                    <div class="col-4 col-md-3">
                        <img v-if="post.image" :src="getImage(post.image)" class="img-fluid rounded" alt="card image" />
                    </div>

                    <!-- Nội dung bên phải -->
                    <div class="col-8 col-md-9">
                        <h5 class="card-title mb-1">{{ post.title }}</h5>
                        <p class="card-text mb-2 text-muted">
                            {{ post.content.length > 120
                                ? post.content.slice(0, 120) + '...'
                                : post.content }}
                        </p>

                        <small class="text-muted">Tác giả: {{ post.author }}</small> <br>
                        <router-link class="btn btn-sm btn-primary mt-2"
                            :to="{ name: 'PostDetail', params: { id: post.id } }">
                            Xem chi tiết
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
