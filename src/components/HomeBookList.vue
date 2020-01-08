<template>
    <div>
        <van-nav-bar
                :title=tit
                :right-text=more
                @click-right="$emit('toMore')"
        />
        <div class="books">
            <div class="book"
                 @click="$emit('onBookSelect',item)"
                 v-for="(item,index) in latestUpdated"
                 :key="index">
<!--                默认图片占位：解决图片加载过程中内容抖动，和加载失败后内容错行-->
                <div class="cover" style="position: relative">
                    <img src="../assets/imgs/400x400.png" alt="">
                    <img style="position: absolute;left: 0;" :src="item.img_url" alt="">
                </div>
                <div class="title van-ellipsis">{{item.title}}</div>
                <div class="author van-ellipsis">{{item.authors | join}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Booklist",
        data(){
            return{
                more:'更多'
            }
        },
        props:{
            tit:{
                type:String,
                default:'666'
            },
            latestUpdated:{
                type:Array,
            },
        },
        filters:{
            join(v){
                return v.join(',');
            }
        },
    }
</script>

<style scoped>
    .van-nav-bar__title{position: absolute;left: 16px;}
    .books{display: flex;flex-wrap: wrap;align-items: center;padding: 0 2%;width: 96%;height: 100%;}
    .book{display: inline-block;width: 30%;margin: 10px 1.66%;}
    .book img{width: 100%;}
    .book .title{padding: 5px 0;font-size: 14px}
    .book .author{font-size: 12px;color: rgba(69, 90, 100, 0.6)}
    .moreBook .van-nav-bar{display: none;}
</style>