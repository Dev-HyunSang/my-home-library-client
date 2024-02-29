<template>
    <div id="login" class="m-8">
        <div class="top-container text-center">
            <h1 class="text-2xl font-bold">우리집 도서관 로그인</h1>
        </div>
        <div class="form-container text-center mt-5">
            <form @submit.prevent="login">
                <div class="mt-2">
                    <input type="email" class="w-80 h-10 rounded border-2 border-sky-500 mt-2 mb-2 placeholder:text-slate-500 pl-2" placeholder="이메일" v-model="email">
                </div>
                <div class="mt-2">
                    <input type="password" class="w-80 h-10 rounded border-2 border-sky-500 mt-2 mb-2 placeholder:text-slate-500 pl-2" placeholder="패스워드" v-model="password">
                </div>
                <div class="mt-2">
                    <input type="submit" class="w-80 h-10 rounded bg-sky-500 text-white">
                </div>
            </form>
            <div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import router from '@/routers';

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            console.log(this.email);
            console.log(this.password);
            axios({
                baseURL: "http://localhost:3000/api",
                url: "/auth/login",
                method: "post",
                data: {
                    email: this.email,
                    password: this.password,
                }
            }).then(function (response) {
                console.log(response);
                let token = response.data.data.access_token;
                localStorage.setItem("access_token", token);
                // window.location.href = '/';
                router.push('/home');
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
<style>
</style>