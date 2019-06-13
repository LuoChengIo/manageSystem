import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './icons' // icon
import './permission' // permission control
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import * as filters from './filters' // global filters

Vue.config.productionTip = false
Vue.use(ElementUI)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
