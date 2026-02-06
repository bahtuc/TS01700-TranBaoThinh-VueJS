<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Comment from './Comment.vue'

const route = useRoute()
const post = ref(null)

// load ảnh
const getImage = (image) => {
    return new URL(`../assets/image/${image}`, import.meta.url).href
}

onMounted(() => {
    const posts = JSON.parse(localStorage.getItem('posts')) || []

    // lấy id từ url
    const postId = route.params.id

    // tìm bài viết
    post.value = posts.find(p => p.id === postId)
})
</script>

<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>

        <img v-if="post.image" :src="getImage(post.image)" class="img-fluid rounded" alt="card image" />

        <p><strong>Tác giả:</strong> {{ post.author }}</p>
        <p>{{ post.content }}</p>
    </div>

    <p v-else>Không tìm thấy bài viết</p>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
