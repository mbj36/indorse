import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Vuetify from 'vuetify'
import router from './router/index'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' // Using the vuetify CSS framework


Vue.config.productionTip = false

Vue.prototype.$http = Axios //Registering the Axios globally to use like this.$http

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
