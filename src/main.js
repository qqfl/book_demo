import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from "@/router";
//引入mint
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//引入axios
import Axios from "axios";
Vue.prototype.$axios = Axios;
//引入mockjs
import './mock'

Vue.config.productionTip = false;

new Vue({
    //路由添加到vue实例
    router,
    render: h => h(App),
}).$mount('#app');

//移动端rem布局
!function (win, doc) {
    if (!win.addEventListener) return;
    function setFont() {
        var html = document.documentElement;
        var k = 750;
        html.style.fontSize = html.clientWidth / k * 100 + "px";
    }
    setFont();
    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded', setFont, false);
    win.addEventListener('resize', setFont, false);
    win.addEventListener('load', setFont, false);
}(window, document);
