import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueHtml2Canvas from 'vue-html2canvas'
// import VueHtml2Canvas from 'html2canvas-fixsvg'

Vue.config.productionTip = false

Vue.use(VueHtml2Canvas);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
