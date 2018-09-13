import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
    error: require("@/assets/no-picture.gif"),

    loading: require("@/assets/no-picture.gif")
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
