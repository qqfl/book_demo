import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from "@/router";
//引入vuex
import store from '@/store'
//引入mockjs
import '@/mock'
//引入validate
import '@/validate'

//引入vant
import Vant, {Toast} from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);
//引入axios
import Axios from "axios";
Axios.defaults.baseURL = 'https://www.demo.com/api';
Vue.prototype.$axios = Axios;


// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        // overlay: true,
        duration: 0
    });
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Toast.clear();
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


Vue.config.productionTip = false;

new Vue({
    //路由添加到vue实例
    router,
    store,
    render: h => h(App),
}).$mount('#app');