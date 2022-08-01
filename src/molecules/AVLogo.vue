<template>
    <img :src="logo" />
    <p class="text-grey-4 q-mt-sm text-center">{{ caption }}</p>
</template>

<script setup>
import logo from '@/assets/logo.svg';

defineProps({
    caption: {
        type: String,
        default: '',
    },
});
</script>
