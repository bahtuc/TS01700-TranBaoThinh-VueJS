<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const search = computed({
    get() {
        return route.query.search ?? ""
    },
    set(search) {
        router.replace({ query: { search } })
    }
})
</script>
<template>
    <h2>About.vue</h2>
    <label for="">
        Search : <input v-model.trim="search" maxlength="20">
    </label>
</template>