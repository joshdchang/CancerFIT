<template>
  <div class="text-center w-full">
    <NuxtLink :to="to ? to : ''" class="max-w-full">
      <button
        class="max-w-full sm:py-2 px-5 py-1 text-base font-medium leading-6 whitespace-no-wrap rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        :class="theme + ' ' + w">
        <slot />
      </button>
    </NuxtLink>
  </div>
</template>
<style scoped>
  button {
    transition: background 100ms;
    border-width: 2px;
    background: #0288d1;
    border-width: 2px;
    border-color: #03a9f4;
    color: white;
    max-width: 100%;
  }

  button:hover {
    background: #0277bd;
  }

  .light {
    border-color: #81d4fa;
    color: #0277bd;
    background: white;
  }

  .light:hover {
    background: #b3e5fc;
  }
</style>
<script>
  export default {
    props: ["theme", "to", "w"],
  };
</script>