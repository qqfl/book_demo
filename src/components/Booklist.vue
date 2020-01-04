<template>
    <div>
        <mt-header class="new-book">
            <mt-button slot="left">{{tit}}</mt-button>
            <router-link to="/" slot="right">
                <mt-button>{{more}}</mt-button>
            </router-link>
        </mt-header>
        <div class="book" v-for="item in latestUpdated" :key="item.id">
            <div class="cover"><img :src="item.img_url" alt=""></div>
            <div class="title">{{item.title}}</div>
            <div class="author">{{item.authors | join}}</div>
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
        }
    }
</script>

<style scoped>
    .new-book{margin: .2rem .2rem 0;background: none;color: #000;}
    .book{width: 2.1rem;display: inline-block;margin-left: .3rem;margin-top: .3rem;}
    .book img{width: 100%;}
    .book .title{font-weight: bold;padding: .1rem 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .book .author{font-size: .24rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>