import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

localStorage.setItem('users', JSON.stringify([
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: '123',
        avatar: 'test.jpg'
    },
    {
        name: 'Bạch Tuộc',
        email: '0cto@gmail.com',
        password: '171',
        avatar: '0cto.jpg'
    },
    {
        name: 'TEST-0CTO',
        email: 'a',
        password: '123',
        avatar: 'test.jpg'
    }
]))


localStorage.setItem('posts', JSON.stringify([
    {
        id: 'p01',
        title: 'TP.HCM cầu thị lắng nghe ý kiến người dân về chỉnh trang chợ Bến Thành, Hồ Con Rùa',
        content: "Ngày 4.2, Văn phòng Thành ủy TP.HCM có công văn truyền đạt ý kiến của Thường trực Thành ủy TP.HCM về chỉnh trang một số tuyến đường, nút giao thông và công trình công cộng trên địa bàn thành phố. Trong đó, có việc chỉnh trang chợ Bến Thành, Hồ Con Rùa nhận nhiều ý kiến góp ý thời của người dân.",
        image: 'BenThanh.png',
        author: 'a'
    },
    {
        id: 'p02',
        title: 'Đàm phán bắt đầu tại UAE, Nga yêu cầu Ukraine nhượng bộ',
        content: 'Hãng AFP ngày 4.2 đưa tin Nga yêu cầu Ukraine chấp nhận các điều kiện để chấm dứt cuộc xung đột kéo dài gần 4 năm, đồng thời tuyên bố sẽ tiếp tục gây sức ép nếu Kyiv không đồng ý.Yêu cầu được đưa ra trong bối cảnh phái đoàn 2 bên bắt đầu vòng đàm phán tại Abu Dhabi (UAE) ngày 4.2. Cuộc đàm phán do Mỹ làm trung gian nằm trong một loạt các hoạt động ngoại giao cho đến nay vẫn chưa đạt được thỏa thuận nào để chấm dứt xung đột.',
        image: 'phatngonvienNga.png',
        author: 'a'
    }
]))

localStorage.setItem('comments', JSON.stringify([
    {
        postid: 'p01',
        username: 'bật nắp quan tài hôn em lần cuối',
        comment: 'sau khi sơn lại thấy không đẹp nhưng nhìn chung thì mới hơn'
    },
    {
        postid: 'p01',
        username: 'Công túa bong bóng',
        comment: 'nhìn hong đẹp '
    }
]))
createApp(App)
    .use(router)
    .mount('#app')