import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Vuetify from 'vuetify'
import router from './router/index'

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false

Vue.prototype.$http = Axios

Vue.prototype.$http.defaults.headers.common['content-type'] = "application/json"
Vue.prototype.$http.defaults.headers.common['trakt-api-key'] = "a3d0657c3d918bfbcae7ec4286423494b5afbdcd776fdf2b7ddcf334b87629fe"
Vue.prototype.$http.defaults.headers.common['trakt-api-version'] = "2"


new Vue({
    render: h => h(App),
    router
}).$mount('#app')
