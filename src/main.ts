import Vue from 'vue'
import App from './App.vue'

// Feature Import
import router from './router'
import store from './store'

//Import CSS????
import './CSS/tailwind.css'
import './CSS/static.css'

import VueResource from "vue-resource";
Vue.use(VueResource);


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
