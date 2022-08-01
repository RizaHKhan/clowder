<template>
    <AVModal label="Persistent Modal" persistent title="Persistent Modal">
        <p>lorem ipsum</p>
        <template #actions="{ closeModal }">
            <AVButton label="Close" outline @click="closeModal" />
            <AVButton label="Save" />
        </template>
    </AVModal>
    <AVModal label="Modal" title="Simple Modal">
        <p>lorem ipsum</p>
        <template #actions="{ closeModal }">
            <AVButton label="Close" outline @click="closeModal" />
            <AVButton label="Save" />
        </template>
    </AVModal>
</template>

<script setup>
import AVButton from '@/atoms/AVButton.vue'
import AVModal from '@/molecules/AVModal.vue'
</script>
