<template>
    <AVRow flex>
        <a :href="props.privacyPolicy.link" target="_blank" class="text-grey">{{
            props.privacyPolicy.text
        }}</a>
        <a
            :href="props.termsOfService.link"
            target="_blank"
            class="text-grey"
            >{{ props.termsOfService.text }}</a
        >
        <p>&copy; {{ year }} Avvinue, Inc</p>
    </AVRow>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import AVRow from '@/atoms/AVRow.vue'

const props = defineProps({
    privacyPolicy: {
        type: Object,
        default: () => ({ link: '#', text: 'Privacy Policy' }),
    },
    termsOfService: {
        type: Object,
        default: () => ({ link: '#', text: 'Terms of Service' }),
    },
})

const year = ref(new Date().getFullYear())
</script>
