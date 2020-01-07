<template>
    <div>
        <van-nav-bar
                title="标题"
                left-arrow
                @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    export default {
        name: "Full",
        methods: {
            onClickLeft() {
                this.$router.back();
            },
        }
    }
</script>

<style scoped>

</style>