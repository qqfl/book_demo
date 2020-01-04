<template>
    <div>
        <router-view/>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="http://placehold.it/100x100">
                首页
            </mt-tab-item>
            <mt-tab-item id="category">
                <img slot="icon" src="http://placehold.it/100x100">
                分类
            </mt-tab-item>
            <mt-tab-item id="cart">
                <img slot="icon" src="http://placehold.it/100x100">
                购物车
            </mt-tab-item>
            <mt-tab-item id="me">
                <img slot="icon" src="http://placehold.it/100x100">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return{
                selected:'home',
            }
        },
    }
</script>

<style scoped>
    .mint-tabbar{position: fixed;}
</style>