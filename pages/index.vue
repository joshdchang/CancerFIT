<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <TheCard nospacer="true">
        <TheImage v-if="home.banner_type === 'image'" class="rounded-xl w-full" :asset="home.banner" />
        <YoutubeVideo v-if="home.banner_type === 'video'" :src="home.youtube_link"></YoutubeVideo>
        <div class="sm:p-10 p-6 cf-card-content">
          <WYSIWYG>
            <TheImage class="mx-auto" :asset="home.logo" />
            <hr>
            <span v-html="home.content"></span>
          </WYSIWYG>
          <div>
            <PillButton to="/about" theme="light" class="mb-3" w="w-80">More About Us</PillButton>
            <PillButton to="/resources" w="w-80">Participant Resources</PillButton>
          </div>
        </div>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG :content="home.title"></WYSIWYG>
        <div>
          <ScheduleItem v-for="upcoming of classes.slice(0, home.classes)" :upcoming="upcoming"></ScheduleItem>
        </div>
        <div v-if="classes.slice(0, home.classes).length === 0" class="text-xl text-gray-500">
          No upcoming classes posted yet.
        </div>
        <PillButton to="/schedule" w="w-80" v-else>See Full Schedule</PillButton>
      </TheCard>
      <TheCard v-if="resources.password_protected && (!$getCookie('pw') || $getCookie('pw') !== resources.password)">
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
      this.home = await this.$api('Home')
      console.log(this.home)
      this.classes = await this.$api('Classes')
      this.classes.sort(function (a, b) {
        return new Date(a.date_and_time) - new Date(b.date_and_time)
      })
      for (let i = 0; i < this.classes.length; i++) {
        let single = this.classes[i]
        if (new Date().getTime() - 1000 * 60 * 60 > new Date(single.date_and_time).getTime()) {
          this.classes.shift()
          i--
        }
      }
      this.resources = await this.$api('Resources')
    },
    data() {
      return {
        home: {},
        classes: [],
        resources: {},
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
          this.$router.push('/resources')
        } else if (this.pwInput) {
          this.incorrect = true
        }
      }
    }
  }
</script>