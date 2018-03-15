// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' //请求数据
import utils  from './assets/js/common.js' //公共js
import ElementUI from 'element-ui' //element-ui
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(ElementUI)

// Vue.use(axios,VueAxios)
Vue.prototype.axios = axios
Vue.prototype.utils = utils  //公共信息（例如:主域名等）


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
