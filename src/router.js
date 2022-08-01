import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: 'AVButton',
                name: 'AVButton',
                component: () => import('@/views/AVButton.vue'),
            },
            {
                path: 'AVInput',
                name: 'AVInput',
                component: () => import('@/views/AVInput.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
