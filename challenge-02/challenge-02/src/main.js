import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'

import store from './store/index'
import router from './router'
new Vue({
   store,
   router,
  render: h => h(App),
}).$mount('#app')
