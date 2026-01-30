<script setup>
import { ref } from "vue";

const point = ref("0");
</script>
<template>
    <div class="container">
        <h3>Nhập điểm của bạn:</h3>
        <input v-model.number="point" type="number" placeholder="Nhập điểm">
        <p v-if="point < 0 || point > 10" style="color: red;">Vui lòng nhập thang điểm từ 0 đến 10</p>
        <p v-else-if="point < 5.0">Yếu</p>
        <p v-else-if="point >= 5.0 && point < 6.5">Trung bình</p>
        <p v-else-if="point >= 6.5 && point < 8.0">Khá</p>
        <p v-else-if="point >= 8.0 && point < 9.0">Giỏi</p>
        <p v-else>Xuất sắc</p>
    </div>
</template>