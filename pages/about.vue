<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <TheCard>
        <WYSIWYG :content="about.content"></WYSIWYG>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG :content="about.title"></WYSIWYG>
        <WYSIWYG>
          <div v-for="founder of founders">
            <TheImage :asset="founder.photo" class="left-float" />
            <h2>​{{ founder.name }}</h2>
            <p>{{ founder.bio }}</p>
            </p>
          </div>
        </WYSIWYG>
      </TheCard>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch() {
      this.about = await this.$api('about')
      this.founders = this.$sort(await this.$api('founders'), this.about.founders)
    },
    data: () => ({
      about: {},
      founders: []
    }),
  }
</script>