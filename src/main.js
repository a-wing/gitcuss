import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
Vue.prototype.$ajax = axios

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
