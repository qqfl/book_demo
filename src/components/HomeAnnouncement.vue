<template>
    <div>
        <van-notice-bar
                :text="ac"
                left-icon="volume-o"
        />
    </div>
</template>

<script>
    export default {
        name: "Announcement",
        props:{
            ac:String
        }
    }
</script>

<style scoped>

</style>