<script setup>
import { ref } from "vue";

const students = ref([
    { name: "Vũ Đình Minh Nghĩa", score: 9.5, dob: "2007-12-20" },
    { name: "Nguyễn Ngọc Giàu", score: 9, dob: "2003-05-11" }
])
const student = ref([
    {
        name: "",
        score: null,
        dob: ""
    }
])
let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
    if (isEditing.value) {
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        students.value.push({ ...student.value });
    }
    resetFormm();
}

function editStudent() {
    student.value = { ...students.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
}

function deleteStudent(index) {
    students.value.splice(index, 1);
}

function resetFormm() {
    student.value = {
        name: "",
        score: null,
        dob: ""
    }
}
</script>
<template>
    <form @submit.prevent="submitForm" class="form col-sm-4">
        <h3>Thêm học sinh</h3>
        <div class="mb-3 mt-3">
            <label for="name">Họ tên</label>
            <input type="text" class="form-control" v-model="student.name" id="name" required />
        </div>
        <div class="mb-3">
            <label for="score">Điểm</label>
            <input type="number" max="10" min="0" class="form-control" v-model="student.socre" id="score" required />
        </div>
        <div class="mb-3">
            <label for="dob">Ngày sinh</label>
            <input type="date" class="form-control" v-model="student.dob" id="aob" required />
        </div>
        <button type="submit" class="btn btn-success">{{ isEditing ? "Cập nhật" : "Thêm" }}</button>
    </form>

    <div>
        <h3>Danh sách</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>họ và tên</th>
                    <th>Điểm</th>
                    <th>Ngày sinh</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(stu, index) in students" :key="index">
                    <td>{{ stu.name }}</td>
                    <td>{{ stu.score }}</td>
                    <td>{{ stu.dob }}</td>
                    <td>
                        <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>