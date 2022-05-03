<template>
  <div class="bg-gray-200 p-6 sm:p-8 rounded-xl sm:rounded-2xl grid grid-cols-1 mb-4 sm:mb-6">
    <TheImage :asset="article.featured_image" class="w-full rounded-md sm:rounded-lg mb-5 sm:mb-7"></TheImage>
    <WYSIWYG>
      <h2>{{ article.title }}</h2>
      <p class="font-bold cf-m-0">By {{ article.author }}</p>
      <p v-if="article.publish_date">{{ new Date(article.publish_date).toLocaleDateString('en-US', { month: 'long', day:
        'numeric',
        year: 'numeric' }) }}</p>
      <p v-else>{{ new Date(article.date_created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'
        }) }}
      </p>
    </WYSIWYG>
    <span class="mt-5 sm:mt-7" @click="$router.push('/news/' + article.id)">
      <PillButton theme="light" w="w-80">Read Article</PillButton>
    </span>
  </div>
</template>
<script>
  export default {
    props: ['article']
  }
</script>