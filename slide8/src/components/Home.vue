<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToAbout() {
    router.push('/About')
}
</script>

<template>
    <div>
        <h1>Trang chủ</h1>
        <button @click="goToAbout">Go to About</button>
    </div>
</template>
