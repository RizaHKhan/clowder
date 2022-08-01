<template>
    <q-icon size="lg" color="purple">
        <template v-for="(_, slot) in $slots" #[slot]="scope">
            <slot :name="slot" v-bind="scope || {}" />
        </template>
    </q-icon>
</template>
