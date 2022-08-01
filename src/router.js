import { createRouter, createWebHistory } from 'vue-router'
import items from './components'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            ...items.map((item) => ({
                path: item,
                name: item,
                component: () => import(`@/views/${item}.vue`),
            })),
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
