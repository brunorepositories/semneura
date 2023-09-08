// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Rotas
import Default from '@/layouts/default/Default.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
      { path: '/paises', name: 'ListarPais', component: () => import('@/components/ListarPais.vue') },
      { path: '/estados', name: 'ListarEstados', component: () => import('@/components/ListarEstados.vue') },
      { path: '/cidades', name: 'ListarCidades', component: () => import('@/components/ListarCidades.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
