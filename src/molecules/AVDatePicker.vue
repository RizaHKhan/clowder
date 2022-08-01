<template>
    <AVInput v-model="date" mask="date">
        <template #append>
            <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                >
                    <AVDate v-model="date" />
                </q-popup-proxy>
            </q-icon>
        </template>
    </AVInput>
</template>

<script setup>
import AVInput from '@/atoms/AVInput.vue';
import AVDate from '@/atoms/AVDate.vue';
import { computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const date = computed({
    get: () => props.date,
    set: (val) => emit('update:modelValue', val),
});
</script>
