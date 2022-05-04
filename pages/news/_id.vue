<template>
  <div v-else class="grid grid-cols-1 max-w-3xl mx-auto">
    <div>
      <TheCard nospacer="true">
        <TheImage class="rounded-xl w-full mb-3 md:mb-4" :asset="article.featured_image" />
        <div class="sm:p-10 p-6 cf-card-content">
          <WYSIWYG>
            <h1>{{ article.title }}</h1>
            <p v-if="article.author" class="font-bold text-black">By {{ article.author }}</p>
            <p v-if="article.publish_date">{{ new Date(article.publish_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric',
              year: 'numeric' }) }}</p>
            <p v-else>{{ new Date(article.date_created).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </p>
            <hr>
          </WYSIWYG>
          <WYSIWYG :content="article.content"></WYSIWYG>
        </div>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG>
          <h1>Other Articles</h1>
        </WYSIWYG>
        <div>
          <ArticleItem v-for="item of articles" v-if="item.status === 'published' && item !== article" :article="item"></ArticleItem>
        </div>
      </TheCard>
    </div>
  </div>
</template>
<script>
  export default {
    async fetch() {
      this.articles = await this.$api('Articles')
      for (let article of this.articles) {
        if (article.id == this.$route.params.id) {
          this.article = article
        }
      }
    },
    data: () => ({
      articles: [],
      article: {}
    }),
    head() {
      return {
        title: this.article.title + ' - CancerFIT'
      }
    }
  }
</script>