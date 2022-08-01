<template>
    <img :src="logo" />
    <p class="text-grey-4 q-mt-sm">{{ $t('app.caption') }}</p>
</template>

<script setup>
import logo from '@/assets/logo.svg';
</script>
