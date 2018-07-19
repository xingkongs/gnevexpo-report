import Vue from 'vue'
import Router from 'vue-router'
import Report from './views/report.vue'
import Mobile from './views/report_mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'report',
      component: Report
    },
    {
      path: '/index_mobile',
      name: 'mobile',
      component: Mobile
    }
  ]
})
