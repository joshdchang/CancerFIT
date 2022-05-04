<template>
    <img v-if="asset" :src="'https://cancerfit.up.railway.app/assets/' + asset">
</template>
<script>
    export default {
        props: ["asset"]
    }
</script>