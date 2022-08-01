<template>
    <AVColorPicker v-model="color" />
</template>

<script setup>
import { ref } from 'vue'
import AVColorPicker from '@/molecules/AVColorPicker.vue'

const color = ref('')
</script>
