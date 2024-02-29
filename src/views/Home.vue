<template>
    <div class="home m-8">
        <div class="top-container leading-relaxed">
            <h1 class="text-xl font-bold">어서오세요. {{ nickname }}님!</h1>
            <p>오늘도 독서를 함께 해 봐요!</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import router from '@/routers';

export default {
    name: 'ViewHome',
    data() {
        return {
            nickname: '',
            id: ''
        }
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        getUserData() {
            var vm = this;
            axios({
            baseURL: "http://localhost:3000/api",
            url: "/auth/data",
            method: "get",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
            }).then(function (response) {
                console.log(response.data.data.nickname);
                vm.nickname = response.data.data.nickname;
                vm.id = response.data.data.id;
            }).catch(function (error) {
                console.log(error);
                router.push({ name: "Login" });
            });
        }
    }
}
</script>
<style>
</style>