<template>
  <div>
    <div class="mb-3 aspect-w-16 aspect-h-9 w-full bg-black rounded-xl overflow-hidden">
      <iframe v-if="src" :src="'//drive.google.com/file/d/' + getId(src) + '/preview'" frameborder="0" allowfullscreen></iframe>
    </div>
    <WYSIWYG>
      <p>
        <slot></slot>
      </p>
    </WYSIWYG>
  </div>
</template>
<script>
  export default {
    props: ["src"],
    methods: {
      getId: (url) => {
        return url.match(/[-\w]{25,}(?!.*[-\w]{25,})/)
      }
    }
  }
</script>