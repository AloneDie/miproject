import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../views/login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: login,
        redirect: '/login',
    },
    // {
    // path: '/index',
    // name: 'index',
    // component: index,
    /**
         * 二级分类使用childen
         *childen: [
            {
                path: '/',
                name: '',
                component: () => import('../'),
            },
        ],
         */
    // },
];

const router = new VueRouter({
    // 使用history路由，不使用hash路由
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// 导出路由
export default router;
