<template>
    <h1>{{ greeting }}</h1>
    <button v-bind:title="buttonTitle" @click="chageGreeting">Click để thay đổi
    </button>
</template>
<script>
export default {
    data() {
        return {
            greeting: 'Xin chào bạn!',
            buttonTitle: 'Nhấp để thay đổi lời chào'
        };
    },
    methods: {
        chageGreeting() {
            this.greeting = 'Hello Wold!';
            this.buttonTitle = 'Lời chào đã cập nhật';

        }
    },
}
</script>