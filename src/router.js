import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    // mode:'history',
    routes:[
        {path:'/',component:()=>import('@/pages/Main.vue'),children:[
                {name:'home',path:'/',component:()=>import('@/pages/Home')},
                {name:'category',path:'category',component:()=>import('@/pages/Category')},
                {name:'cart',path:'cart',component:()=>import('@/pages/Cart')},
                {name:'me',path:'me',component:()=>import('@/pages/Me')},
            ]},
        {name:'HomeMoreBook',path: '/HomeMoreBook/:type/:tit',component:()=>import('@/pages/HomeMoreBook')}
    ],
})