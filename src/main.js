import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleAlert from "vue-simple-alert";
Vue.config.productionTip = false
// alert component 
Vue.use(VueSimpleAlert);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
