<template>
    <div>
        <div class="sidebar">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item
                        v-for="(item,index) in sides"
                        :key="index"
                        :href="'#'+index"
                        :title="item.title"/>
            </van-sidebar>
        </div>
        <van-search placeholder="请输入搜索关键词" v-model="value"/>
        <div class="bookList" :class="{'left0':hideSidebar}" @scroll="onSt" ref="bl">
            <van-list style="padding-bottom: 300px;">
                <div v-for="(item,index) in sideFilter" :key="index">
                    <van-divider class="vd" :id="index">{{item.title}}</van-divider>
                    <van-cell
                            v-for="(it,ind) in item.content"
                            :key="ind"
                            :title="it"
                    />
                </div>
            </van-list>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        props: {
            sides: {
                type: Array,
            }
        },
        data() {
            return {
                activeKey: 0,
                value: '',
                st: [],
                hideSidebar: false,
            }
        },
        methods: {
            //滚动时判断滚动距离在标题到顶端距离数组中的区间，动态改变侧边导航的activeKey
            onSt() {
                let blt = this.$refs.bl.scrollTop + 50;
                let stl = this.st.length;
                for (let i = 0; i < stl; i++) {
                    //如果滚动距离大于最后一个标题的距离顶端的高度，则侧边栏最后一项选中
                    if (blt > this.st[stl-1]){
                        this.activeKey = stl-1;
                    //如果滚动距离大于标题到顶端距离数组中的第一个值且小于第二个值时activeKey对应项选中
                    }else if (blt > this.st[i] && blt < this.st[i + 1]) {
                        this.activeKey = i;
                    }
                }

            }
        },
        computed: {
            //双重数组筛选，实现搜索功能
            sideFilter (){
                let arr= [];
                let sd = this.sides;
                if (sd.length){
                    for (let i = 0; i < sd.length; i++) {
                        let newCont = sd[i].content.filter(x => x.indexOf(this.value) > -1);
                        if (newCont.length > 0){
                            arr.push({
                                title: sd[i].title,
                                content: newCont,
                            });
                        }
                    }
                }else {
                    arr = this.sides
                }
                return arr;
            }
        },
        watch:{
            //监听activeKey值变化，实现侧边栏隐藏的选中项自动滚动到可视区域
            activeKey(){
                let sb = document.getElementsByClassName('sidebar')[0];
                let ak = document.getElementsByClassName('van-sidebar-item--select')[0];
                let akt = ak.offsetHeight*(this.activeKey+1);
                //如果选中项距离顶端距离大于滚动容器高度，则滚动到他们的差值
                if (akt > sb.offsetHeight){
                    sb.scrollTop = akt-sb.offsetHeight;
                //否则不存在滚动需求，滚动距离归零
                }else {
                    sb.scrollTop = 0;
                }
            },
            //监听搜索栏输入值，如果有输入值则隐藏侧边栏
            value(){
                this.value.length>0 ? this.hideSidebar=true : this.hideSidebar=false;
            }
        },
        mounted() {
            //获取所有标题到顶部距离值的数组
            let self = this;
            setTimeout(function () {
                let vd = document.getElementsByClassName('vd');
                for (let i = 0; i < vd.length; i++) {
                    self.st.push(vd[i].offsetTop);
                }
            }, 100);
        },
    }
</script>

<style scoped>
    .sidebar {
        width: 100px;
        position: absolute;
        top: 54px;
        bottom: 50px;
        left: 0;
        overflow-y: auto;
    }

    .van-sidebar-item--select {
        color: #ee0a24;
    }

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

    .left0{left: 0!important;}
</style>