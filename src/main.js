import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import '@/utils/veevalidate'

axios.defaults.baseURL = 'http://localhost:3000'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
