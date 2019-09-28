import axios from 'axios'
import io from 'socket.io-client'
import Unicon from 'vue-unicons'
import Vue from 'vue'
import App from './App'
import icons from './utils/icons'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Unicon.add(icons)
Vue.use(Unicon)

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
