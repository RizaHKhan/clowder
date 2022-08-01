<template>
    <q-layout view="lpp lpp lFf">
        <q-drawer
            v-model="leftDrawerOpen"
            class="window-height"
            show-if-above
            side="left"
            bordered
            :width="250"
        >
            <Sidebar />
        </q-drawer>

        <q-page-container>
            <q-page padding>
                <p>{{ route.params.component }}</p>
                <div class="row column q-gutter-sm">
                    <router-view />
                </div>
            </q-page>
        </q-page-container>

        <q-footer class="bg-white text-grey q-px-md">
            Footer goes here
        </q-footer>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()

const leftDrawerOpen = ref(false)
</script>
