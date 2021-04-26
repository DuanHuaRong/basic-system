import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './styles/mixin.less' //定义常见变量
import './styles/index.css' //基础样式
import './styles/common.less' //公共样式

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')