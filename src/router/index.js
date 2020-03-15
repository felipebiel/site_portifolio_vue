import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/frontend/pages/home/Home'
import Sobre from '../components/frontend/pages/sobre/Sobre'
import Servico from '../components/frontend/pages/servico/Servico'
import Portifolio from '../components/frontend/pages/portifolio/Portifolio'
import Contato from '../components/frontend/pages/contato/Contato'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
  {
    path: '/servico',
    name: 'servico',
    component: Servico
  },
  {
    path: '/portifolio',
    name: 'portifolio',
    component: Portifolio
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
