import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dataV from '@jiaminghi/data-view'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(dataV)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

Vue.prototype.server_url = 'http://127.0.0.1:8000';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

