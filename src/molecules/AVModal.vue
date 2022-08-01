<template>
    <AVButton v-bind="$attrs" @click="modal = true" />

    <q-dialog v-model="modal">
        <q-card :style="[size]">
            <q-card-section class="q-pb-none">
                <p class="text-h6">{{ title }}</p>
            </q-card-section>
            <q-card-section>
                <slot />
            </q-card-section>
            <q-card-actions align="right">
                <slot name="actions" v-bind="{ closeModal }" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import AVButton from '@/atoms/AVButton.vue';
import { ref, computed, defineProps } from 'vue';

const modal = ref(false);
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'medium',
        validator(val) {
            return ['small', 'medium', 'large'].includes(val);
        },
    },
});

const size = computed(() => {
    let style = {};
    switch (props.size) {
        case 'small':
            style = { width: '300px' };
            break;
        case 'medium':
            style = { width: '700px', 'max-width': '80vw' };
            break;
        case 'large':
            style = { 'min-width': '95vw' };
            break;
    }

    return style;
});

const closeModal = () => {
    modal.value = false;
};
</script>

<script>
export default {
    inheritAttrs: false,
};
</script>
