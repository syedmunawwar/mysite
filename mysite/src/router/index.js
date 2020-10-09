import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import (/* webpackPrefetch: true */  '@/components/Home.vue')
const About = () => import (/* webpackPrefetch: true */  '@/components/About.vue')
const Portfolio = () => import (/* webpackPrefetch: true */  '@/components/Portfolio.vue')
const Skills = () => import (/* webpackPrefetch: true */  '@/components/Skills.vue')

const router = new Router ({
    // mode : 'history',
    routes : [
        {
            path    : '/',
            name    : 'Home',
            component : Home,
            meta: {
                title: ''
              }
        },
        {
            path    : '/about',
            name    : 'About',
            component : About
        },
        {
            path    : '/portfolio',
            name    : 'Portfolio',
            component : Portfolio
        },
        {
            path    : '/skills',
            name    : 'Skills',
            component : Skills
        },
        {
            path    : '*',
            name    : 'Home',
            component : Home
        }
    ]
})

export default router;