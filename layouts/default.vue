<template>
    <div>
        <TheHeader />
        <div style="background-color: #b3e5fc; background-image: -webkit-linear-gradient(60deg, #81d4fa 50%, #b3e5fc 50%);">
            <div class="container px-2 md:py-20 sm:py-16 py-10 mx-auto min-h-screen">
                <Nuxt />
            </div>
        </div>
        <TheFooter />
    </div>
</template>
<style>
    input {
        @apply bg-gray-200 p-3 sm:p-4 rounded-xl w-full px-5 sm:px-7 sm:text-lg;
    }
</style>