<template>
    <q-card flat class="window-height row column">
        <q-card-section class="row justify-center"
            ><AVLogo caption="Avvinue Clowder"
        /></q-card-section>
        <q-card-section class="row column justify-center">
            <q-list padding class="rounded-borders">
                <q-item
                    v-for="item in items"
                    :key="item"
                    v-ripple
                    clickable
                    class="rounded-borders"
                    :class="route.path.includes(item) ? 'bg-purple-1' : ''"
                    @click="handleItemClick(item)"
                >
                    <q-item-section
                        >{{ item }}
                        {{ route.path.includes(item) }}</q-item-section
                    >
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import AVLogo from '@/molecules/AVLogo.vue'
import items from '../components.js'

const router = useRouter()
const route = useRoute()

console.log(route.params.component)

const handleItemClick = (target) => {
    router.push(`/${target}`)
}
</script>
