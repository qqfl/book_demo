<template>
    <div>
        <cate-content :sides="bookNames"/>
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
            })
        },
    }
</script>

<style scoped>
</style>