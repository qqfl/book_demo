<template>
    <div class="sidebar">
        <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for="(item,index) in sides" :key="index" :title="item"/>
        </van-sidebar>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        props:{
            sides:{
                type:Array,
            }
        },
        data(){
            return{
                activeKey: 0,
            }
        }
    }
</script>

<style scoped>
    .sidebar{width: 100px;position: absolute;top: 54px;bottom: 50px;left: 0;overflow-y: auto;}
    .van-sidebar-item--select{color: #ee0a24;}
</style>