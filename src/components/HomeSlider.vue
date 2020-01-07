<template>
    <div class="swipe">
        <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in slides" :key="index">
                <router-link :to="{name:'full'}">
                    <img :src="item.src" :alt="item.alt">
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Slider",
        props:{
            slides:Array
        }
    }
</script>

<style scoped>
    .swipe img{width: 100%;}
</style>