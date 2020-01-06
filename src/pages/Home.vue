<template>
    <div>
        <div class="section">
            <!--            热门推荐-->
            <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in slides" :key="index">
                    <img :src="item.src" :alt="item.alt">
                </van-swipe-item>
            </van-swipe>
            <!--            快讯-->
            <div class="ac">
                <van-notice-bar
                        :text="ac"
                        left-icon="volume-o"
                />
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

        <model-dialog ref="dialog">
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
        </model-dialog>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                ac: '',
                slides: [],
                latestUpdate: [],
                recommend: [],
                selected: '',
            }
        },
        components: {
            BookList: () => import('@/components/Booklist'),
            ModelDialog: () => import('@/components/Dialog'),
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
    .swipe img {
        width: 100%;
    }

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