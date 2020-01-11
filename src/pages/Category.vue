<template>
    <div>
        <cate-content ref="cc" :sides="bookNames">
            <div slot="loading">
                <van-loading style="margin: 10% 0;text-align: center;" size="24px">加载中...</van-loading>
            </div>
        </cate-content>
    </div>
</template>

<script>
    import CateContent from "@/components/CateContent";
    export default {
        name: "Category",
        components:{
            CateContent,
        },
        data() {
            return {
                bookNames:[],
            };
        },
        created(){
            let self = this;
            this.$axios.get('/cate')
            .then(res=>{
                for (let key in res.data){
                    self[key] = res.data[key];
                }
                self.$refs.cc.hideLoading();
                self.$refs.cc.getDistance();
            })
        },
    }
</script>

<style scoped>
</style>