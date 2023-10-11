// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Rotas
import viewDefault from '@/components/layouts/View.vue'

const routes = [
  {
    path: '/',
    component: viewDefault,
    children: [
      { path: '/home', name: 'Home', 
        component: () => import('@/components/Home.vue') 
      },
      { path: '/paises', name: 'ListarPais', 
        component: () => import('@/components/pais/ListarPais.vue') 
      },
      { path: '/estados', name: 'ListarEstados', 
        component: () => import('@/components/estado/ListarEstados.vue') 
      },
      { path: '/cidades', name: 'ListarCidades',
        component: () => import('@/components/cidade/ListarCidades.vue') 
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
