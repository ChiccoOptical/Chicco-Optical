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

import 'vue-progress-path/dist/vue-progress-path.css'
import VueProgress from 'vue-progress-path'

Vue.use(VueProgress, {})


Vue.config.productionTip = false

new Vue({
  data() {
    return {
      glasses: [],
      contacts: [],
      sunglasses: [],
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
