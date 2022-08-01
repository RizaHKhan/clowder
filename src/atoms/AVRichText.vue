<template>
    <div>
        <QuillEditor v-bind="$attrs" theme="snow" />
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
</script>

<script>
export default {
    inheritAttrs: false,
}
</script>
