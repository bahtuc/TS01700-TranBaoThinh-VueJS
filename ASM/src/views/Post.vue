<script setup>
import { ref } from 'vue'


const posts = ref([
    { id: 1, title: 'BYD M9 và cách nhìn mới về MPV cao cấp tại Việt Nam', content: 'MPV cao cấp đang dần thoát khỏi cách đánh giá dựa trên hình ảnh hay thương hiệu. Phân khúc này được tiếp cận từ góc độ thực dụng hơn, nơi trải nghiệm thực tế và hiệu quả sử dụng đóng vai trò trung tâm.' },
    { id: 2, title: 'Thị trường sàng lọc mạnh các dự án BĐS tăng giá ảo', content: 'Thị trường bất động sản đang bước vào giai đoạn phân hóa rõ nét, khi nhiều dự án chào bán với mức giá cao vượt giá trị thực phải đối mặt nguy cơ thanh khoản suy giảm, thậm chí đóng băng giao dịch.' },
    { id: 3, title: 'Còn lúng túng thủ tục dự án đường sắt cao tốc Hà Nội – Quảng Ninh', content: 'Quá trình triển khai hồ sơ Báo cáo nghiên cứu khả thi dự án đường sắt tốc độ cao Hà Nội – Quảng Ninh đang phát sinh lúng túng về trình tự, thẩm quyền thẩm định, trong bối cảnh đây là dự án hạ tầng quy mô lớn, kỹ thuật phức tạp và tổng vốn đầu tư rất cao.' }
])
</script>


<template>
    <div>
        <h2>Bài viết</h2>
        <div class="card mb-3" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5>{{ post.title }}</h5>
                <p>{{ post.content }}</p>
            </div>
        </div>
    </div>
</template>