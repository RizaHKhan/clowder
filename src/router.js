import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: ':component',
                name: 'Component',
                component: () => import('@/views/Main.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
