<template>
    <div :style="styles" :class="[...classes]">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import useResponsiveness from '@/composables/useResponsiveness'

const { direction } = useResponsiveness()

const props = defineProps({
    flex: {
        type: Boolean,
        default: false,
    },
    grid: {
        type: Boolean,
        default: false,
    },
    column: {
        type: Boolean,
        default: false,
    },
    columns: {
        type: String,
        default: '',
    },
    justify: {
        type: String,
        default: '',
        validator: (val) =>
            [
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
            ].includes(val),
    },
    direction: {
        type: String,
        default: '',
    },
    gap: {
        type: String,
        default: '0.5rem',
    },
})

const styles = computed(() => {
    const styles = {}

    if (props.grid) {
        styles['display'] = 'grid'

        if (!props.columns && props.grid) {
            const slots = useSlots()
            const numOfElements = slots.default().length

            styles['grid-template-columns'] = `repeat(${numOfElements}, 1fr)`
        } else if (props.columns && props.grid) {
            styles['grid-template-columns'] = props.columns
        } else {
            styles['grid-auto-flow'] = direction.value
        }
    } else if (props.flex) {
        styles['display'] = 'flex'

        if (props.column) {
            styles['flex-direction'] = 'column'
        } else {
            styles['flex-direction'] = 'row'
        }
    }

    styles['grid-gap'] = props.gap

    if (props.justify) {
        styles['justify-content'] = props.justify
    }

    return styles
})

const classes = computed(() => {
    const classes = []

    if (props.justify) {
        classes.push(`justify-${props.justify}`)
    }

    return classes
})

// TODO: add responsiveness
// TODO: add a Flow prop which over rides direction
</script>
