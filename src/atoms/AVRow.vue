<template>
    <div ref="grid" class="grid" :style="style">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import useResponsiveness from '@/composables/useResponsiveness';

const { direction } = useResponsiveness();

const grid = ref(null);
const style = computed(() => {
    return {
        'grid-auto-flow': direction.value,
        'grid-gap': '0.5rem',
    };
});
</script>
