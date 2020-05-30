import axios from 'axios'
import Unicon from 'vue-unicons'
import Vue from 'vue'
import App from './App'
import icons from './utils/icons'
import router from './router'
import store from './store'
import '@/scss/main.scss'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Unicon.add(icons)
Vue.use(Unicon)

const socket = new WebSocket('ws://localhost:8001')

socket.onmessage = (event) => {
  store.dispatch('addRequest', JSON.parse(event.data))
}

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
