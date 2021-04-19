import Vue from 'vue'
import VueRouter from 'vue-router'
import Vagas from '../components/listaVagas'
import NovoCandidato from '../components/candidatos'
import NovaVaga from '../components/vagas'
import CandidatarVaga from '../components/candidato_vaga'
import Candidatos from '../components/listaCandidatos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Vagas    
  },
  {
    path: '/newCandidato',
    component: NovoCandidato
  },
  {
    path: '/vaga',
    component: NovaVaga 
  },
  {
    path: '/candidatar',
    component: CandidatarVaga
  },
  {
    path: '/candidatos',
    component: Candidatos
  }
]

const router = new VueRouter({
  routes
})

export default router
