<template>
    <AVInput v-model="color">
        <template #append>
            <AVIcon
                name="colorize"
                class="cursor-pointer"
                :style="{
                    color,
                }"
            >
                <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                >
                    <q-color v-model="color" />
                </q-popup-proxy>
            </AVIcon>
        </template>
    </AVInput>
</template>

<script setup>
import AVInput from '@/atoms/AVInput.vue'
import AVIcon from '@/atoms/AVIcon.vue'

import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

const color = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})
</script>
