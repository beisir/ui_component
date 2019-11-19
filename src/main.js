// 每一次服务端渲染都需要渲染一个新的app对象

import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuex from 'vuex'
import Meta from 'vue-meta'
import i18n from './lang' // Internationalization
import App from './App.vue'

import createIcon from './icons' // icon
createIcon(Vue);
import createElementUi from './element_ui'
createElementUi(Vue)

import createStore from './store'
import createRouter from './router'
import Notification from './components/notification'
import './assets/styles/index.scss'
import Tabs from './components/tabs'





Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Notification)
Vue.use(Tabs)
import bus from './utils/bus.js';

const router = createRouter(VueRouter)
const store = createStore(Vuex)

const app = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
});


bus.$on('auth', () => {
    router.push('/login');
});

router.onReady(() => {
    app.$mount('#root')
})
