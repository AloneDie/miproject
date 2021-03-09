import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 注册组件
import topBar from './components/topBar.vue';
import siteFooter from './components/site-footer.vue';
import footerInfo from './components/footer-info.vue';

// 全局组件
Vue.component('topBar', topBar);
Vue.component('footerInfo', footerInfo);
Vue.component('siteFooter', siteFooter);

// 引入axios组件
import axios from 'axios';
// 配置接口地址，为预防后台接口发生变化更改量大，直接配置url地址
axios.defaults.baseURL = 'http://localhost:3000';
// 将axios放入到Vue原型对象中的$http中
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
