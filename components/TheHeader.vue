<template>
  <header style="box-shadow: 0px 0px 13px 0px #0974b364;"
    class="md:sticky relative top-0 bg-white w-full px-8 text-gray-700 body-font overflow-hidden z-10">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
      <NuxtLink to="/" class="relative z-10 flex items-center w-auto text-2xl font-bold leading-none text-black select-none"> <img
          src="/icon.png" class="h-10 mr-1" />CancerFIT </NuxtLink>
      <nav
        class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute md:left-9">
        <NuxtLink
          class="relative font-medium text-sm sm:text-lg lg:text-xl leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
          v-for="item of nav" :key="item.name" :to="item.to">
          <span class="block">{{ item.name }}</span>
        </NuxtLink>
      </nav>
      <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
        <span class="inline-flex rounded-md shadow-sm">
          <PillButton to="/donate" w="w-40 md:w-auto">Donate</PillButton>
        </span>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        nav: [
          {
            name: "About",
            to: "/about",
          },
          {
            name: "Schedule",
            to: "/schedule",
          },
          {
            name: "Resources",
            to: "/resources",
          },
          {
            name: "News",
            to: "/news",
          },
          {
            name: "Contact",
            to: "/contact",
          },
        ],
      };
    },
  };
</script>