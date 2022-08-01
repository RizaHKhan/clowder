<template>
    <q-card flat class="window-height row column">
        <q-card-section class="row justify-center"> sup </q-card-section>
        <q-card-section class="row column justify-center">
            <q-list padding class="rounded-borders">
                <q-item
                    v-ripple
                    clickable
                    class="rounded-borders"
                    @click="router.push({ component: 'AVButton' })"
                >
                    <q-item-section>AVButton</q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
