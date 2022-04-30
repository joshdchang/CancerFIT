<template>
    <div>
        <div class="cf-wysiwyg" v-if="content" v-html="content"></div>
        <div class="cf-wysiwyg" v-else>
            <slot></slot>
        </div>
    </div>
</template>
<style>
    .cf-blue {
        color: #0288d1;
    }
    .cf-wysiwyg {
        color: #616161;
    }
    .cf-wysiwyg h1 {
        @apply mt-9 sm:mt-12 font-bold text-2xl sm:text-3xl cf-blue;
    }
    .cf-wysiwyg h2 {
        @apply mt-7 sm:mt-11 font-bold text-xl sm:text-2xl;
        color: black;
    }
    .cf-wysiwyg h3 {
        @apply mt-5 sm:mt-9 font-bold text-xl sm:text-2xl;
        color: black;
    }
    .cf-wysiwyg a {
        @apply cf-blue;
    }
    .cf-wysiwyg img {
        @apply rounded-xl w-full max-w-sm;
    }
    .cf-wysiwyg img.left-float {
        @apply sm:mr-8 xl:mr-8 w-48 xl:w-40 lg:w-48 sm:w-40 max-w-full lg:float-none xl:float-left sm:float-left;
    }
    .cf-wysiwyg hr {
        @apply mt-8 sm:mt-10 mb-8 sm:mb-14;
    }
    .cf-wysiwyg div {
        @apply mt-10 sm:mt-12;
    }
    .cf-wysiwyg input {
        @apply mt-3 sm:mt-4;
    }

    .cf-wysiwyg * {
        @apply mb-5 sm:mb-6;
        @apply sm:text-lg;
    }
    .cf-wysiwyg > :first-child {
        margin-top: 0 !important;
    }
    .cf-wysiwyg > :last-child {
        margin-bottom: 0 !important;
    }
</style>
<script>
    export default {
        props: ["content"]
    }
</script>