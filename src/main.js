import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'
import {routes} from "./routes";
import {store} from "./store/store";

Vue.use(VueRouter)

Vue.filter('currency', value => {
    return '$' + value.toLocaleString()
})

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
