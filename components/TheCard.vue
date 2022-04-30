<template>
    <div class="rounded-3xl cf-card" v-if="nospacer">
        <slot></slot>
    </div>
    <div class="rounded-3xl cf-card" v-else>
        <div class="sm:p-10 p-6 cf-card-content">
            <slot />
        </div>
    </div>
</template>
<style>
    .cf-card {
        background: white;
        box-shadow: 0px 0px 10px 0px #0277bd44;
        overflow: hidden;
        padding: 5%;
        margin: 0 4%;
        margin-bottom: 8%;
    }

    .cf-card-content > * {
        @apply mb-10 sm:mb-12;
    }

    .cf-card-content :first-child {
        margin-top: 0 !important;
    }

    .cf-card-content :last-child {
        margin-bottom: 0 !important;
    }
</style>
<script>
    export default {
        props: ['nospacer']
    }
</script>