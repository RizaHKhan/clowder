<template>
    <q-table :grid="denseTable" flat style="width: 100%">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-table>
</template>

<script setup>
import useResponsiveness from '@/composables/useResponsiveness'

const { denseTable } = useResponsiveness()
</script>
