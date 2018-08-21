import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../components/Landing'
import Trending from '../components/Trending'
import Popular from '../components/Popular'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Landing
    },
    {
        path: '/trending',
        component: Trending
    },
    {
        path: '/popular',
        component: Popular
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router