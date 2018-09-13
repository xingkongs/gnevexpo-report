import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Report from './views/report'
import Autoshow from './views/autoshow'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/report',
            name: 'report',
            component: Report
        },
        {
            path: '/autoshow',
            name: 'autoshow',
            component: Autoshow
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
