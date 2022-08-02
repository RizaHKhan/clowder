<template>
    <AVInput v-model="date">
        <template #append>
            <AVIcon name="event" class="cursor-pointer">
                <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                >
                    <AVDate v-model="date" />
                </q-popup-proxy>
            </AVIcon>
        </template>
    </AVInput>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'
import AVInput from '@/atoms/AVInput.vue'
import AVIcon from '@/atoms/AVIcon.vue'
import AVDate from '@/atoms/AVDate.vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

const date = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
})
</script>
