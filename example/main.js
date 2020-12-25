import Vue from 'vue'
import App from './App.vue'
import DomScreenshot from '../src/index'

Vue.use(DomScreenshot)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
