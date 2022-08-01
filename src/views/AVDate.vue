<template>
    <AVDate v-model="date" />
    <p>{{ date }}</p>
</template>

<script setup>
import { ref } from 'vue'
import AVDate from '@/atoms/AVDate.vue'

const date = ref('')
</script>
