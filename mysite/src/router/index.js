import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import ('@/components/Home.vue')
const About = () => import ('@/components/About.vue')
const Portfolio = () => import ('@/components/Portfolio.vue')
const Skills = () => import ('@/components/Skills.vue')

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