<template>
    <AVToggle v-model="toggle" label="Toggle Me" />
</template>

<script setup>
import { ref } from 'vue'
import AVToggle from '@/atoms/AVToggle.vue'

const toggle = ref(false)
</script>
