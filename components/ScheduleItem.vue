<template>
    <div class="bg-gray-200 p-3 sm:p-4 rounded-xl grid grid-cols-1 mb-3 sm:mb-4">
        <p class="text-gray-900 sm:pb-3 pb-2 text-md sm:text-lg text-center">{{ date }}</p>
        <PillButton theme="light" w="w-80">Add to Calendar</PillButton>
    </div>
</template>
<script>
    export default {
        props: ['date']
    }
</script>