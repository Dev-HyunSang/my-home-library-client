<template>
    <div id="join" class="mt-8">
        <div class="top-container text-center">
            <h1 class="text-2xl font-bold">우리집 도서관 회원가입</h1>
            <p class="mt-1">꾸준하게 읽고 기록해요!</p>
            <router-link to="/" class="underline decoration-solid underline-offset-4 decoration-sky-500">홈으로 돌아가기</router-link>
        </div>
        <div class="form-container w-full content-center item-center flex flex-col columns-4 text-center box-border mt-5">
            <form @submit.prevent="join">
                <div>
                    <input type="text" class="w-80 h-10 rounded border-2 border-sky-500 mt-2 mb-2 placeholder:text-slate-500 pl-2" placeholder="닉네임" v-model="nickname">
                </div>
                <div>
                    <input type="email" class="w-80 h-10 rounded border-2 border-sky-500 mt-2 mb-2 placeholder:text-slate-500 pl-2" placeholder="이메일" v-model="email">
                </div>
                <div>
                    <input type="password" class="w-80 h-10 rounded border-2 border-sky-500 mt-2 mb-2 placeholder:text-slate-500 pl-2" placeholder="패스워드" v-model="password">
                </div>
                <div>
                    <input type="password" class="w-80 h-10 rounded border-2 border-sky-500 mt-2 mb-2 placeholder:text-slate-500 pl-2" placeholder="패스워드 확인">
                </div>
                <div>
                    <input type="submit" class="w-80 h-10 rounded bg-sky-500 text-white mt-2" value="회원가입">
                </div>
            </form>
            <div class="pt-4">
                <p>이미 회원가입을 하셨나요?</p><router-link to="login" class="underline decoration-solid underline-offset-4 decoration-sky-500">로그인 하기</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import router from '@/routers';

export default {
    name: 'JoinView',
    data() {
        return {
            nickname: '',
            email: '',
            password: '',
        }
    },
    methods: {
        join() {
            axios({
                baseURL: "http://localhost:3000/api",
                url: "/auth/join",
                method: "post",
                data: {
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password,
                }
            }).then(function (response) {
                alert(response.data.status.message);
                // window.location.href = '/login';
                router.push('/login');
            }).catch(function (error) {
                alert(error.response.data.status.message);
                console.log(error);
            });
        }
    }
}
</script>
<style>
</style>