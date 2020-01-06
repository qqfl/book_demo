<template>
    <div>
        <router-view/>
        <van-tabbar route v-model="active">
            <van-tabbar-item name="home" icon="home-o" :to="{name:'home'}">首页</van-tabbar-item>
            <van-tabbar-item name="category" icon="cluster-o" :to="{name:'category'}">分类</van-tabbar-item>
            <van-tabbar-item name="cart" icon="cart-o" :to="{name:'cart'}">购物车</van-tabbar-item>
            <van-tabbar-item name="me" icon="user-o" :to="{name:'me'}">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return{
                active:'home',
            }
        },
    }
</script>

<style scoped>
</style>