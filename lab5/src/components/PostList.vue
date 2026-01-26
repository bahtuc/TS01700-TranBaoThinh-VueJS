<template>
    <h2>Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.title.lenght > 20 }"
        :style="{ backgroundColor: post.backgroundColor, color: post.TextColor }" class="post">
        <h3 class="text-success">{{ post.title }}</h3>
        <h4 class="Text-danger">{{ post.author }}</h4>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
export default {
    name: "PostLis",
    props: {
        type: Array,
        required: true
    }
};
</script>

<style>
.post {
    padding: 20px;
    margin: 10px 0;
    ;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.hightlighted {
    border: 2px solid lightgray;
}
</style>