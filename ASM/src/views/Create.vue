<script setup>
import { ref } from 'vue'


const title = ref('')
const content = ref('')


const submitPost = () => {
alert('Đã tạo bài viết!')
title.value = ''
content.value = ''
}
</script>


<template>
<div>
<h2>Tạo bài viết</h2>
<input v-model="title" class="form-control mb-2" placeholder="Tiêu đề" />
<textarea v-model="content" class="form-control mb-2" placeholder="Nội dung"></textarea>
<button class="btn btn-primary" @click="submitPost">Đăng bài</button>
</div>
</template>