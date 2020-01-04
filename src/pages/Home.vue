<template>
    <div>
        <div class="section">
<!--            热门推荐-->
            <mt-swipe :auto="4000" class="swipe">
                <mt-swipe-item v-for="(item,index) in slides" :key="index">
                    <img :src="item.src" :alt="item.alt">
                </mt-swipe-item>
            </mt-swipe>
<!--            快讯-->
            <div class="ac">
                <mt-button class="ac-mb" type="primary" size="small">快讯</mt-button>
                <span class="ac-text">{{ac}}</span>
            </div>
        </div>
        <div class="section">
<!--            新书上架-->
            <book-list
                    tit="新书上架"
                    @onBookSelect="preview"
                    :latestUpdated="latestUpdate"/>
        </div>
        <div class="section">
<!--            编辑推荐-->
            <book-list
                    tit="编辑推荐"
                    @onBookSelect="preview($event)"
                    :latestUpdated="recommend"/>
        </div>
        <div style="height: 60px;">
<!--            占位-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                ac:'',
                slides:[],
                latestUpdate:[],
                recommend:[],
            }
        },
        components:{
            BookList:()=>import('@/components/Booklist')
        },
        methods:{
            preview(book){
                alert(JSON.stringify(book))
            }
        },
        created(){
            let self = this;
            this.$axios.get('/home').then(res=>{
                self.ac = res.data.ac;
                self.slides = res.data.slides;
                self.latestUpdate = res.data.latestUpdate;
                self.recommend = res.data.recommend;
            })
        }
    }
</script>

<style scoped>
    .swipe{height: 3rem;}
    .swipe img{width: 100%;}
    .ac{margin: .2rem .2rem 0;padding-bottom: .2rem;border-bottom: 1px solid gray;}
    .ac-mb{vertical-align: middle;margin: 0 10px;}
    .ac-text{font-size: .3rem;display: inline-block;vertical-align: middle;}
</style>