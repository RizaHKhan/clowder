<template>
    <div>Route is: {{ route.params.component }}</div>
    <component :is="component" :key="route.params.component" />
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const component = computed(() =>
    defineAsyncComponent(() => import(`./${route.params.component}.vue`))
);
</script>
