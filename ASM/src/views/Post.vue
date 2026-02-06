<script setup>
<<<<<<< HEAD
import { ref, onMounted } from 'vue'

// Danh sách bài viết
const posts = ref([])

onMounted(() => {
    try {
        const data = localStorage.getItem('posts')
        posts.value = data ? JSON.parse(data) : []
    } catch (e) {
        console.error('Lỗi parse posts từ localStorage', e)
        posts.value = []
    }
})

// Hàm xử lý đường dẫn ảnh
const getImage = (image) => {
    return new URL(`../assets/image/${image}`, import.meta.url).href
}
=======
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
</script>

<template>
<<<<<<< HEAD
    <div class="container mt-3">
        <h2 class="mb-3">Bài viết</h2>

        <!-- Trạng thái rỗng -->
        <div v-if="posts.length === 0" class="alert alert-info">
            Chưa có bài viết nào.
        </div>

        <!-- Danh sách bài viết -->
        <div v-else class="card mb-3" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <div class="row align-items-center">
                    <!-- Ảnh bên trái -->
                    <div class="col-4 col-md-3">
                        <img v-if="post.image" :src="getImage(post.image)" class="img-fluid rounded" alt="card image" />
                    </div>

                    <!-- Nội dung bên phải -->
                    <div class="col-8 col-md-9">
                        <h5 class="card-title mb-1">{{ post.title }}</h5>
                        <p class="card-text mb-2 text-muted">
                            {{ post.content.length > 120
                                ? post.content.slice(0, 120) + '...'
                                : post.content }}
                        </p>

                        <small class="text-muted">Tác giả: {{ post.author }}</small> <br>
                        <router-link class="btn btn-sm btn-primary mt-2"
                            :to="{ name: 'PostDetail', params: { id: post.id } }">
                            Xem chi tiết
                        </router-link>
                    </div>
                </div>
=======
    <div>
        <h2>Bài viết</h2>
        <div class="card mb-3">
            <div class="card-body">
                <h5>BYD M9 và cách nhìn mới về MPV cao cấp tại Việt Nam</h5>
                <p>MPV cao cấp đang dần thoát khỏi cách đánh giá dựa trên hình ảnh hay thương hiệu. Phân khúc này được
                    tiếp cận từ góc độ thực dụng hơn, nơi trải nghiệm thực tế và hiệu quả sử dụng đóng vai trò trung
                    tâm.</p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h5>Thị trường sàng lọc mạnh các dự án BĐS tăng giá ảo</h5>
                <p>Thị trường bất động sản đang bước vào giai đoạn phân hóa rõ nét, khi nhiều dự án chào bán với mức giá
                    cao vượt giá trị thực phải đối mặt nguy cơ thanh khoản suy giảm, thậm chí đóng băng giao dịch.</p>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <h5>Còn lúng túng thủ tục dự án đường sắt cao tốc Hà Nội – Quảng Ninh</h5>
                <p>Quá trình triển khai hồ sơ Báo cáo nghiên cứu khả thi dự án đường sắt tốc độ cao Hà Nội – Quảng Ninh
                    đang phát sinh lúng túng về trình tự, thẩm quyền thẩm định, trong bối cảnh đây là dự án hạ tầng quy
                    mô lớn, kỹ thuật phức tạp và tổng vốn đầu tư rất cao.</p>
>>>>>>> 7439dc84fc91e2500cd1a0705700a06c46189e93
            </div>

        </div>
    </div>
</template>
