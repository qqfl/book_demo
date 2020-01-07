<template>
    <div>
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <div class="bookList">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                >
                    <van-cell
                            v-for="(item,index) in bookFilter"
                            :key="index"
                            :title="item"
                    >
                        <slot/>
                    </van-cell>
                </van-list>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CateBookList",
        data() {
            return {
                value: '',
                bookNames: [],
                loading: false,
                finished: false,
                isLoading: false,
            };
        },
        created() {
            let self = this;
            this.$axios.get('/cate')
                .then(res => {
                    self.bookNames = res.data.bookNames;
                });
        },
        methods: {
            onLoad() {
                // 上拉加载更多
                let self = this;
                this.$axios.get('/cate')
                    .then(res => {
                        setTimeout(function () {
                            self.bookNames=[...self.bookNames,...res.data.bookNames];
                            self.loading = false;
                            // 数据全部加载完成
                            if (self.bookNames.length >= 100) {
                                self.finished = true;
                            }
                        },1000)
                    });
            },
            onRefresh() {
                //下拉刷新
                let self = this;
                this.$axios.get('/cate')
                    .then(res => {
                        setTimeout(function () {
                            self.bookNames = res.data.bookNames;
                            self.$toast('刷新成功');
                            self.isLoading = false;
                            self.finished = false;
                        },1000)
                    });
            }
        },
        computed: {
            bookFilter (){
                return this.value.length ? this.bookNames.filter(x => x.indexOf(this.value) > -1) : this.bookNames
            }
        }
    }
</script>

<style scoped>
    .bookList {
        position: absolute;
        top: 54px;
        right: 0;
        bottom: 50px;
        left: 85px;
        overflow-y: auto;
        background: #fff;
        border-left: 1px solid #efefef;
    }
</style>