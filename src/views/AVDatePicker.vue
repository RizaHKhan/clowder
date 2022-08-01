<template>
    <AVDatePicker v-model="date" />
    <p>{{ date }}</p>
</template>

<script setup>
import { ref } from 'vue'
import AVDatePicker from '@/molecules/AVDatePicker.vue'

const date = ref('')
</script>
