<template>
  <div class="grid grid-cols-1 lg:grid-cols-2" v-if="pwCookie && resources.password && pwCookie === resources.password">
    <div>
      <TheCard>
        <WYSIWYG :content="resources.title"></WYSIWYG>
        <div v-for="video of videos">
          <DriveVideo :src="video.drive_link">{{ video.caption }}</DriveVideo>
        </div>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG :content="resources.content"></WYSIWYG>
      </TheCard>
    </div>
  </div>
  <div v-else class="grid grid-cols-1 max-w-3xl mx-auto">
    <div>
      <TheCard>
        <WYSIWYG>
          <h1>Participant Login</h1>
          <input type="password" name="password" placeholder="Password" v-model="pwInput">
          <NuxtLink to="/contact" v-if="incorrect">Forgot the password? Contact us.</NuxtLink>
        </WYSIWYG>
        <span @click="login()">
          <PillButton w="w-80">Log In</PillButton>
        </span>
      </TheCard>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch() {
      this.resources = await this.$api('Resources')
      this.videos = this.$sort(await this.$api('videos'), this.resources.videos)
    },
    data() {
      return {
        resources: {},
        videos: [],
        pwCookie: this.$getCookie('pw'),
        pwInput: '',
        incorrect: false
      }
    },
    methods: {
      login: function () {
        console.log(this.pwInput)
        if (this.pwInput && this.resources.password && this.pwInput === this.resources.password) {
          this.$setCookie('pw', this.pwInput, 365)
          this.pwCookie = this.pwInput
        } else if(this.pwInput) {
          this.incorrect = true
        }
      }
    },
    head() {
      return {
        title: 'Resources - CancerFIT'
      }
    }
  }
</script>