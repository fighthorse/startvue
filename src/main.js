import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index.js'
// 引用工具文件
import utils from './utils/index.js'

// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

// 将工具方法绑定到全局
Vue.prototype.$utils = utils

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
