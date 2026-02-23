<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/blogs">Blogs</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-nav {
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.08),
    inset 0 -4px 8px rgba(0, 0, 0, 0.05);
}

.main-nav a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 15px;
}

.main-nav a.router-link-active {
  background-color: aqua;
  border-radius: 4px;
}
</style>
