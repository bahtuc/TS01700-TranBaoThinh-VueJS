<template>
    <div>
        <Menu />
        <div class="container mt-4">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import Menu from './components/Menu.vue'
</script>
