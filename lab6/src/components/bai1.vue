<script setup>
import { ref } from "vue";

const point = ref("0");
</script>
<template>
    <div class="container">
        <h3>Nhập điểm của bạn:</h3>
        <input v-model.number="point" type="number" placeholder="Nhập điểm">
<<<<<<< HEAD
        <div style="display: flex;">
            <p v-if="point < 0 || point > 10" style="color: red;">Vui lòng nhập thang điểm từ 0 đến 10</p>
            <p v-else-if="point < 5.0">Yếu </p>
            <p v-else-if="point >= 5.0 && point < 6.5">Trung bình </p>
            <p v-else-if="point >= 6.5 && point < 8.0">Khá </p>
            <p v-else-if="point >= 8.0 && point < 9.0">Giỏi </p>
            <p v-else>Xuất sắc </p>
            <p>___</p>
            <p v-if="point > 0 && point < 5"> rớt</p>
            <p v-else="point >5 && point <=10"> Đậu</p>
        </div>
=======
        <p v-if="point < 0 || point > 10" style="color: red;">Vui lòng nhập thang điểm từ 0 đến 10</p>
        <p v-else-if="point < 5.0">Yếu</p>
        <p v-else-if="point >= 5.0 && point < 6.5">Trung bình</p>
        <p v-else-if="point >= 6.5 && point < 8.0">Khá</p>
        <p v-else-if="point >= 8.0 && point < 9.0">Giỏi</p>
        <p v-else>Xuất sắc</p>
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
    </div>
</template>