<template>
    <div>
        <cate-sidebar :sides="sides"/>
        <cate-book-list/>
    </div>
</template>

<script>
    import CateSidebar from "@/components/CateSidebar";
    import CateBookList from "@/components/CateBookList";
    export default {
        name: "Category",
        components:{
            CateSidebar,
            CateBookList,
        },
        data() {
            return {
                sides:[],
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