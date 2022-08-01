<template>
    <QuillEditor v-bind="$attrs" />
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
</script>

<script>
export default {
    inheritAttrs: false,
};
</script>
