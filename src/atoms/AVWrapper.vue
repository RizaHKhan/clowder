<template>
    <AVRow flex column>
        <p class="text-weight-bold q-mb-none">{{ props.title }}</p>
        <p class="q-mt-none q-mb-md">{{ props.description }}</p>
        <slot />
    </AVRow>
</template>

<script setup>
import AVRow from '@/atoms/AVRow.vue'

const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
})
</script>

<style scoped lang="scss">
.border-bottom {
    border-bottom: solid 0.5px grey;
}
</style>
