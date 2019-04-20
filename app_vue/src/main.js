import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//4:引入axios库 main.js
import axios from "axios"
//5:修改配置信息 跨域保存session值!!!!
axios.defaults.withCredentials=true
//6:注册组件
Vue.prototype.axios = axios

import qs from "qs";//处理post请求,把js对象转化为字符串
Vue.prototype.qs=qs;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
