<template>
    <div>
        <p>{{ac}}</p>
        <p>{{aa}}</p>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    export default {
        name: "Cart",
        methods:{
            ...mapActions(['getStarted']),
        },
        computed:{
            // ac(){
            //     return this.$store.getters.ac;
            // },
            //mapGetters动态方法生成器，把所有store.getter方法映射为vue实例的computed
            ...mapGetters([
                'ac',
                'aa',
            ]),
        },
        created(){
            this.getStarted();
        },
    }
</script>

<style scoped>

</style>