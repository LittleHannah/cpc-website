import Vue from 'vue'
import App from './App.vue'

import '@/scss/index.scss'
import 'bootstrap'
import VueRouter from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, Axios);
 
Vue.use(VueRouter)
import router from '@/router'
Vue.config.productionTip = false
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
Vue.use(AOS);
AOS.init()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
