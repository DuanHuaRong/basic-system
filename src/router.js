import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})