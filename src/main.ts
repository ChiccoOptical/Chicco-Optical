import Vue, { createApp } from 'vue';
import App from './App.vue'

// Feature Import
import router from './router'
import store from './store'

//Import CSS
import './CSS/tailwind.css'
// import './CSS/tailwindBUILD.css'
import './CSS/static.css'

// VUE RESOURCE
// import VueResource from "vue-resource";
// Vue.use(VueResource);

// VUE PROGRESS PATH
// import 'vue-progress-path/dist/vue-progress-path.css'
// import VueProgress from 'vue-progress-path'
// Vue.use(VueProgress, {})


createApp(App).use(router).use(store).mount('#app')
