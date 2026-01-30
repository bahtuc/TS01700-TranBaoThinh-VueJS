<script setup>
import { ref } from "vue";

const month = ref("1");
</script>
<template>
    <div class="container">
        <h3>Nhập tháng của bạn :</h3>
        <input type="number" v-model.number="month" placeholder="Nhập tháng">
        <p v-if="month < 1 || month > 12" style="color: red;">Vui lòng nhập từ tháng 1 đến tháng 12</p>
        <p v-else-if="month <= 3">Mùa xuân</p>
        <p v-else-if="month > 3 && month <= 6">Mùa hạ</p>
        <p v-else-if="month > 6 && month <= 9">Mùa thu</p>
        <p v-else>Mùa đông</p>
    </div>

</template>