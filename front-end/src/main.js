import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Configuramos Axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.common.Accept = 'application/json'
axios.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error)
  }
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
