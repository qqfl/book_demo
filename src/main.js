import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
//引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);
//引入axios
import Axios from "axios";
Axios.defaults.baseURL = 'https://www.demo.com/api';
Vue.prototype.$axios = Axios;
//引入mockjs
import './mock'

Vue.config.productionTip = false;

new Vue({
    //路由添加到vue实例
    router,
    render: h => h(App),
}).$mount('#app');