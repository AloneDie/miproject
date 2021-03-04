import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../pages/login.vue';
import index from '../views/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: login,
    },
    {
        path: '/index',
        name: 'index',
        component: index,
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
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
