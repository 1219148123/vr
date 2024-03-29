import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  axios  from  'axios'
import  ElementUI  from  'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import qs from 'qs'
import 'bootstrap'
import vRegion from 'v-region'
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

axios.defaults.withCredentials = true;
Vue.prototype.$qs = qs
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios  =  axios
Vue.use(vRegion);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')