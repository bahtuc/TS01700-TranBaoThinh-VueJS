<template>
<<<<<<< HEAD
    <div>
        <h2>Danh sách bài viết</h2>

        <div v-for="(post, index) in posts" :key="index" class="post" :class="{ highlighted: post.title.length > 20 }"
            :style="{ backgroundColor: post.backgroundColor, color: post.textColor }">
            <h3 class="text-success">{{ post.title }}</h3>
            <h4 class="text-danger">{{ post.author }}</h4>
            <p>{{ post.content }}</p>
        </div>
=======
    <h2>Danh sách bài viết</h2>
    <div v-for="(post, index) in posts" :key="index" :class="{ 'highlighted': post.title.lenght > 20 }"
        :style="{ backgroundColor: post.backgroundColor, color: post.TextColor }" class="post">
        <h3 class="text-success">{{ post.title }}</h3>
        <h4 class="Text-danger">{{ post.author }}</h4>
        <p>{{ post.content }}</p>
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
    </div>
</template>

<script>
export default {
<<<<<<< HEAD
    name: "PostList",
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
=======
    name: "PostLis",
    props: {
        type: Array,
        required: true
    }
};
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
</script>

<style>
.post {
    padding: 20px;
    margin: 10px 0;
<<<<<<< HEAD
=======
    ;
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
    border: 1px solid #ddd;
    border-radius: 10px;
}

<<<<<<< HEAD
.highlighted {
    border: 2px solid lightgray;
}
</style>
=======
.hightlighted {
    border: 2px solid lightgray;
}
</style>
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
