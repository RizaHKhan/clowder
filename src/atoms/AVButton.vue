<template>
    <q-btn unelevated color="primary" class="q-pa-md">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-btn>
</template>

<script setup></script>
