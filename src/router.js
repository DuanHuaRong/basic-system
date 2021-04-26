import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        }, {
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "login" */ './views/Login.vue'),
            meta: { title: '登录' }
        }, {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/error',
            name: 'error',
            component: () =>
                import ( /* webpackChunkName: "Error" */ './views/Error.vue')
        },
        {
            path: '/404',
            name: '404',
            component: () =>
                import ( /* webpackChunkName: "Error" */ './views/404.vue')
        },
        {
            path: '*',
            redirect: '/404',
        },
    ]
})