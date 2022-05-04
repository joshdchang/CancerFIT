<template>
  <div v-else class="grid grid-cols-1 max-w-3xl mx-auto">
    <div>
      <TheCard>
        <WYSIWYG :content="news.title"></WYSIWYG>
        <div>
          <ArticleItem v-for="item of articles" v-if="item.status === 'published'" :article="item"></ArticleItem>
        </div>
      </TheCard>
    </div>
  </div>
</template>
<script>
  export default {
    async fetch() {
      this.articles = await this.$api('Articles')
      this.news = await this.$api('News')
    },
    data: () => ({
      articles: [],
      news: {}
    }),
    head() {
      return {
        title: 'News - CancerFIT'
      }
    }
  }
</script>