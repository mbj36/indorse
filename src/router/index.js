import Vue from 'vue'
import VueRouter from 'vue-router'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Home from '../components/Home'
import Movie from '../components/Movie'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/movies/trending',
        component: Trending,
        name: 'trending'
    },
    {
        path: '/movies/popular',
        component: Popular,
        name: 'popular'
    },
    {
        path: '/movie/:id',
        component: Movie,
        name: 'movie'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router