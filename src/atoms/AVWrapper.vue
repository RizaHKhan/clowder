<template>
    <div class="row column q-pb-md border-bottom">
        <p class="text-weight-bold q-mb-none">{{ props.title }}</p>
        <p class="q-mt-none q-mb-md">{{ props.description }}</p>
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
});
</script>

<style scoped lang="scss">
.border-bottom {
    border-bottom: solid 0.5px grey;
}
</style>
