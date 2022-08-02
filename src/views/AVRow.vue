<template>
    <p class="text-h3">Grid</p>
    <p class='text-weight-bold'>Simple Grid</p>
    <AVRow grid>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
    </AVRow>

    <p class='text-weight-bold'>Simple Column 100px 1fr 100px</p>
    <AVRow grid columns="100px 1fr 100px">
        <p class="border">One</p>
        <p class="border">Two</p>
        <p class="border">Three</p>
    </AVRow>

    <p class='text-weight-bold'>Simple Column 100px 1fr  Rows 100px 1fr</p>
    <AVRow grid columns="100px 1fr" rows="100px 1fr">
        <p class="border">One</p>
        <p class="border">Two</p>
        <p class="border">Three</p>
        <p class="border">Four</p>
        <p class="border">Five</p>
        <p class="border">Six</p>
    </AVRow>

    <p class='text-weight-bold'>Grid with flow column</p>
    <AVRow grid flow="column">
        <p class="border">One</p>
        <p class="border">Two</p>
        <p class="border">Three</p>
        <p class="border">Four</p>
        <p class="border">Five</p>
        <p class="border">Six</p>
    </AVRow>

    <p class='text-weight-bold'>Grid with flow row</p>
    <AVRow grid flow="row">
        <p class="border">One</p>
        <p class="border">Two</p>
        <p class="border">Three</p>
        <p class="border">Four</p>
        <p class="border">Five</p>
        <p class="border">Six</p>
    </AVRow>

    <p class="text-h3">Flex</p>
    <p class='text-weight-bold'>Simple Flex</p>
    <AVRow>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
    </AVRow>

    <p class='text-weight-bold'>Flex Space between</p>
    <AVRow justify="space-between">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
    </AVRow>

    <p class='text-weight-bold'>Flex Justify End</p>
    <AVRow justify="flex-end">
        <p>One</p>
        <p><AVButton label="Save" /></p>
        <p>Three</p>
    </AVRow>

    <p class='text-weight-bold'>Flex Flow Row</p>
    <AVRow justify="flex-end" flow="row">
        <p>One</p>
        <p><AVButton label="Save" /></p>
        <p>Three</p>
    </AVRow>
</template>

<script setup>
import AVRow from '@/atoms/AVRow.vue'
import AVButton from '@/atoms/AVButton.vue'
</script>
 
<style lang='sass'>
.border
  border: solid 1px red
  border-radius: 5px
</style>
