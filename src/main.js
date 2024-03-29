import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import "./index.css";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
