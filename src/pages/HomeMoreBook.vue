<template>
    <div>
        <form action="/" class="search">
            <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    @cancel="onCancel"
            />
        </form>
        <transition name="van-fade">
            <van-nav-bar
                    v-show="showSearch"
                    :fixed="true"
                    :title="tit"
                    left-arrow
                    @click-left="onClickLeft"
                    @click-right="onClickRight"
            >
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </transition>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <home-book-list class="moreBook"
                                :tit="tit"
                                @onBookSelect="preview"
                                :latestUpdated="bookDataFilter"/>
            </van-list>
        </van-pull-refresh>
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
    import HomeBookList from "@/components/HomeBookList";
    import HomeBookDetail from "@/components/HomeBookDetail";
    export default {
        name: "Full",
        data(){
            return{
                value: '',
                showSearch: true,
                type: this.$route.params.type,
                tit: this.$route.params.tit,
                bookData:[],
                isLoading: false,
                loading: false,
                finished: false,
                selected: '',
            }
        },
        components:{
            HomeBookList,
            HomeBookDetail,
        },
        computed: {
            bookDataFilter (){
                //单重数组筛选
                return this.value.length ? this.bookData.filter(x => x.title.indexOf(this.value) > -1) : this.bookData
            }
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
        methods: {
            onClickLeft() {
                this.$router.back();
            },
            onClickRight(){
                this.showSearch = false;
            },
            onCancel(){
                this.value = '';
                this.showSearch = true;
            },
            preview(book) {
                this.selected = book;
                this.$refs.dialog.open();
            },
            onRefresh() {
                //下拉刷新
                let self = this;
                this.$axios.get('/home')
                    .then(res => {
                        setTimeout(function () {
                            let data = [];
                            if (self.type === 'new'){
                                data = res.data.latestUpdate
                            }
                            if (self.type === 'edit'){
                                data = res.data.recommend
                            }
                            self.bookData = data;
                            self.$toast('刷新成功');
                            self.isLoading = false;
                            self.finished = false;
                        },1000)
                    });
            },
            onLoad() {
                // 上拉加载更多
                let self = this;
                this.$axios.get('/home')
                    .then(res => {
                        setTimeout(function () {
                            let data = [];
                            if (self.type === 'new'){
                                data = res.data.latestUpdate
                            }
                            if (self.type === 'edit'){
                                data = res.data.recommend
                            }
                            self.bookData=[...self.bookData,...data];
                            self.loading = false;
                            // 数据全部加载完成
                            if (self.bookData.length >= 100) {
                                self.finished = true;
                            }
                        },1000)
                    });
            },
            toDetail(){},
        },
        created(){
            let self = this;
            this.$axios.get('/home')
                .then(res => {
                    let data = [];
                    if (self.type === 'new'){
                        data = res.data.latestUpdate
                    }
                    if (self.type === 'edit'){
                        data = res.data.recommend
                    }
                    self.bookData = data;
                })
                .catch(err => {
                    window.console.log(err);
                })
        }
    }
</script>

<style scoped>
    .search{position: fixed;width: 100%;z-index: 1;}
    .moreBook{margin-top: 54px;}

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