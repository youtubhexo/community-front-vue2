import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider, extend } from 'vee-validate'
// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
