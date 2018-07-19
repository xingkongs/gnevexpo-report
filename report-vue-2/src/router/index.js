import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Report from '@/components/report'
import Mobile from '@/components/report_mobile'

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
      name: 'index_mobile',
      component: Mobile
    }
  ]
})
