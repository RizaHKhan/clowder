<template>
    <div class="row column q-gutter-sm">
        <AVInput label="My Label" />
        <AVInput label="After Icon">
            <template #after>
                <AVButton icon="add" outline color="purple" />
            </template>
        </AVInput>
        <AVInput label="After Icon">
            <template #before>
                <AVButton icon="remove" outline />
            </template>
        </AVInput>
        <AVInput label="Both">
            <template #before>
                <AVButton icon="remove" outline />
            </template>
            <template #after>
                <AVButton icon="add" outline />
            </template>
        </AVInput>
    </div>
</template>

<script setup>
import AVInput from '@/atoms/AVInput.vue';
import AVButton from '@/atoms/AVButton.vue';
</script>
