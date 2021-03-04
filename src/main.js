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

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
