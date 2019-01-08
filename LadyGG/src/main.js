import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import store from '@/store'
import VeeValidate, { dictionary } from './validator'
import App from '@/App.vue'
import '@/assets/style/base.css'
import '@/filter/dateformat'
Vue.use(VueAxios, axios);

// 表单验证
Vue.use(VeeValidate, dictionary);

// 导入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
