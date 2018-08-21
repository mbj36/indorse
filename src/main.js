import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Vuetify from 'vuetify'
import router from './router/index'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

Vue.prototype.$http = Axios

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
