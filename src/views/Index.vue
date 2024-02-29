<template>
    <div id="home" class="leading-relaxed">
        <div class="header text-left p-8">
            <h1 class="text-2xl font-bold">어서오세요! 우리집 도서관입니다.</h1>
            <p class="mt-3">우리집 도서관은 집에 있는 서적을 효과적으로 정리하고 독서량을 파악할 수 있도록 도와주는 서비스입니다.</p>
            <p class="">책을 통해서 다양한 지식을 보다 효율적이고 편하게 독서를 할 수 있도록 도와드립니다. 꾸준하게 읽을 수 있도록 응원도 해 드립니다.</p>
           
            <button class="w-20 h-8 mt-3
            bg-sky-500/100 rounded text-base text-white">
                <router-link class="text-white" to="join">함께 하기</router-link>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IndexView',
}
</script>