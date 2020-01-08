<template>
    <div>
        <!--            热门推荐-->
        <home-slider :slides="slides"/>
        <!--            快讯-->
        <home-announcement :ac="ac"/>
        <!--            新书上架-->
        <home-book-list
                :tit="titNew"
                @onBookSelect="preview"
                @toMore="$router.push({name:'HomeMoreBook',params:{type:'new',tit:titNew}})"
                :latestUpdated="latestUpdate"/>
        <!--            编辑推荐-->
        <home-book-list
                :tit="titEdit"
                @onBookSelect="preview"
                @toMore="$router.push({name:'HomeMoreBook',params:{type:'edit',tit:titEdit}})"
                :latestUpdated="recommend"/>
        <home-book-detail ref="dialog">
            <div slot="header">
                <van-button class="close" type="danger" @click="$refs.dialog.close()">X</van-button>
            </div>
            <div>
                <img :src="selected.img_url" alt="">
                <div class="bookInfo">
                    <p>书名：{{selected.title}}</p>
                    <p>作者：{{selected.authors | jo}}</p>
                </div>
            </div>
        </home-book-detail>
    </div>
</template>

<script>
    import HomeAnnouncement from "@/components/HomeAnnouncement";
    import HomeBookDetail from "@/components/HomeBookDetail";
    import HomeBookList from "@/components/HomeBookList";
    import HomeSlider from "@/components/HomeSlider";

    export default {
        name: "Home",
        data() {
            return {
                titNew:'新书上架',
                titEdit:'编辑推荐',
                ac: '',
                slides: [
                    {src: require('../assets/imgs/750x300.png')}
                ],//页面切换时轮播图的图片加载过程中内容下移体验不好，给个默认占位图
                latestUpdate: [],
                recommend: [],
                selected: '',
            }
        },
        components: {
            HomeAnnouncement,
            HomeBookList,
            HomeBookDetail,
            HomeSlider,
        },
        methods: {
            preview(book) {
                this.selected = book;
                this.$refs.dialog.open();
            },
        },
        created() {
            let self = this;
            this.$axios.get('/home')
                .then(res => {
                    // self.ac = res.data.ac;
                    // self.slides = res.data.slides;
                    // self.latestUpdate = res.data.latestUpdate;
                    // self.recommend = res.data.recommend;
                    // for (let key of Object.keys(res.data)){
                    for (let key in res.data) {
                        self[key] = res.data[key];
                    }
                })
                .catch(err => {
                    window.console.log(err);
                })
        },
        filters: {
            jo(v) {
                let str = '';
                for (let k in v) {
                    str += v[k] + '、';
                }
                return str.substr(0, str.length - 1);
            }
        },
    }
</script>

<style scoped>
    .dialog img {
        width: 100%;
    }

    .close {
        position: absolute;
        right: 5px;
        top: 5px;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        line-height: 36px;
        padding: 0;
    }

    .bookInfo {
        padding: 0 15px;
    }
</style>