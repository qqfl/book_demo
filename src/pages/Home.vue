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
            <book-list tit="新书上架" :latestUpdated="latestUpdate"/>
        </div>
        <div class="section">
<!--            编辑推荐-->
            <book-list tit="编辑推荐" :latestUpdated="recommend"/>
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
                ac:'今日上架的图书全部8折',
                slides:[
                    {alt:'red',src:'http://placehold.it/750x300/red'},
                    {alt:'yellow',src:'http://placehold.it/750x300/yellow'},
                    {alt:'green',src:'http://placehold.it/750x300/green'},
                ],
                latestUpdate:[
                    {
                        id:1,
                        title:"从小白到数据分析达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:2,
                        title:"从小白到数据分析达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:3,
                        title:"从小白到数据分析达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:4,
                        title:"从小白到数据分析达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:5,
                        title:"从小白到数据分析达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:6,
                        title:"从小白到数据分析达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                ],
                recommend:[
                    {
                        id:1,
                        title:"从小白到AI人工智能达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:2,
                        title:"从小白到AI人工智能达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:3,
                        title:"从小白到AI人工智能达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:4,
                        title:"从小白到AI人工智能达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:5,
                        title:"从小白到AI人工智能达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                    {
                        id:6,
                        title:"从小白到AI人工智能达人",
                        authors:["Edward Zaccaro","Daniel Zaccaro"],
                        img_url:"http://placehold.it/420x420",
                    },
                ],
            }
        },
        components:{
            BookList:()=>import('@/components/Booklist')
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