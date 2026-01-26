<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';


</script>

<template>
  <p>Bài 1</p>
  <Bai1></Bai1>
  <p>Bai 2</p>
  <Bai2></Bai2>
  <p>Bai 3</p>
  <Bai3></Bai3>

  <div id="app">
    <h1>Ứng dụng Blog nhỏ với Vue.Js</h1>
    <CreatePost @add-post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<script>
import { ref } from 'vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';

const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  ;
  padding: 20px;
}
</style>
