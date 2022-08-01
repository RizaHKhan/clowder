<template>
    <p>{{ text }}</p>
    <AVRichText v-model="text" />
</template>

<script setup>
import { ref } from 'vue'
import AVRichText from '@/atoms/AVRichText.vue'

const text = ref('')
</script>
