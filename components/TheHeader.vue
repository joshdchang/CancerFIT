<template>
  <div class="sticky top-0 bg-white sm:p-1 md:p-2 lg:p-3" style="box-shadow: 0px 0px 8px 0px #0277bd44;">

    <!-- mobile -->
    <div class="md:hidden w-full py-3 px-4">
      <!-- logo -->
      <span class="font-bold text-xl">CancerFIT</span>

      <!-- menu -->
      <div class="float-right">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>

    <!-- desktop -->
    <div class="hidden md:grid" style="grid-template-columns: repeat(3, auto);">
      <!-- logo -->
      <span class="px-4 py-3 font-bold text-2xl">CancerFIT</span>

      <!-- nav -->
      <div class="grid text-center justify-center">
        <div
          class="divide-x-2 inline-grid"
          style="grid-template-columns: auto; grid-auto-flow: column; justify-items: center; align-items: center;"
        >
          <NuxtLink
            class="px-3 lg:px-4 lg:text-lg transition-color-600 text-color-gray hover:text-color-gray-400"
            v-for="item of nav"
            :key="item.name"
            :to="item.to"
          > {{ item.name }}</NuxtLink>
        </div>
      </div>

      <!-- donate -->
      <div class="grid content-center">
        <div class="text-right px-4">
          <NuxtLink to="/donate">
            <PillButton
              class="text-white"
              style="background: #0288d1;"
            >Donate</PillButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: "About",
          to: "/about"
        },
        {
          name: "Schedule",
          to: "/schedule"
        },
        {
          name: "Resources",
          to: "/resources"
        },
        {
          name: "News",
          to: "/news"
        },
        {
          name: "Contact",
          to: "/contact"
        }

      ]
    }
  }
}
</script>