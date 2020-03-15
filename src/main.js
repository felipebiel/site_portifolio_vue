import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './scss/app.scss';

import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false

const app =new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
