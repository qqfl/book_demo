<template>
    <transition name="van-fade">
        <div class="dialog" v-show="is_open">
            <div>
                <!--            头部及标题-->
                <slot name="header"/>
            </div>
            <div>
                <!--            内容区域-->
                <slot/>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Dialog",
        data() {
            return {
                is_open: false,
            }
        },
        methods: {
            open() {
                this.is_open = true;
            },
            close() {
                this.is_open = false;
            }
        }
    }
</script>

<style scoped>
    .dialog {
        overflow: auto;
        position: fixed;
        top: 24px;
        left: 24px;
        right: 24px;
        bottom: 24px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        z-index: 500;
    }
</style>