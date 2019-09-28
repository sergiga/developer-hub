import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import io from 'socket.io-client'
import 'bootstrap/scss/bootstrap.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const socket = io.connect('http://localhost:8000')

socket.on('request', (data) => {
  store.dispatch('addRequest', data)
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
