<template>
    <div>
        <h2>Tạo bài viết mới</h2>
<<<<<<< HEAD

        <input v-model="title" placeholder="Tiêu đề" />
        <input v-model="author" placeholder="Tác giả" />
        <textarea v-model="content" placeholder="Nội dung"></textarea>

        <button @click="submitPost">Đăng bài</button>
    </div>
</template>

=======
        <input v-model="title" placeholder="Tiêu đề">
        <input v-model="author" placeholder="Tác giả">
        <Textarea v-model="content" placeholder="Nội dung"></Textarea>
        <button @click="submitPost">Đăng bài</button>
    </div>
</template>
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-post'])

const title = ref('')
const content = ref('')
const author = ref('')

function submitPost() {
<<<<<<< HEAD
    if (!title.value || !content.value || !author.value) {
        alert('Vui lòng nhập đầy đủ thông tin')
        return
    }

    const newPost = {
        title: title.value,
        content: content.value,
        author: author.value
=======
    if (title.value && content.value && author.value) {
        const newPost = {
            title: title.value,
            content: content.value,
            author: author.value
        }
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
    }

    emit('add-post', newPost)

    title.value = ''
    content.value = ''
    author.value = ''
}
</script>

<style>
input,
textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
