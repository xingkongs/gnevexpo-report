// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  error: require("@/assets/no-picture.gif"),

  loading: require("@/assets/no-picture.gif")
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

