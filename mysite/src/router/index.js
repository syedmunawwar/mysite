import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import (/*webpackChunkName:"Home" */  '@/components/Home.vue')
const About = () => import (/*webpackChunkName:"About" */  '@/components/About.vue')
const Portfolio = () => import (/*webpackChunkName:"Portfolio" */ '@/components/Portfolio.vue')
const Skills = () => import (/*webpackChunkName:"Skills" */ '@/components/Skills.vue')

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