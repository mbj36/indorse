import Vue from 'vue'
import VueRouter from 'vue-router'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Home from '../components/Home'
import Movie from '../components/Movie'
import TopRated from '../components/TopRated'
import PopularPeople from '../components/PopularPeople'
import People from '../components/People'
import Search from '../components/Search'

Vue.use(VueRouter) // Using Vue router 

// Defining the routes for our app to be used across the app

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
        path: '/movies/top_rated',
        component: TopRated,
        name: 'top_rated'
    },
    {
        path: '/movie/:id',
        component: Movie,
        name: 'movie'
    },
    {
        path: '/people/popular',
        component: PopularPeople,
        name: 'popularpeople'
    },
    {
        path: '/people/:id',
        component: People,
        name: 'people'
    },
    {
        path: '/search',
        component: Search,
        name: 'search',
        props: (route) => ({ query: route.query.q })
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})


export default router // to use the router variable 