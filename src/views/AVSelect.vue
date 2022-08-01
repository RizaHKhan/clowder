<template>
    <AVSelect label="Select" :options="options" v-model="select" />
    <p>{{ select }}</p>
</template>

<script setup>
import { ref } from 'vue'
import AVSelect from '@/atoms/AVSelect.vue'

const select = ref('')

const options = ['One', 'Two', 'Three']
</script>
