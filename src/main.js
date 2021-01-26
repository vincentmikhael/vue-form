import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import router from './router'
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false
Vue.use(VueToast,{
  position:'bottom'
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
