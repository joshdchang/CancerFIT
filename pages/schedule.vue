<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <TheCard>
        <WYSIWYG :content="schedule.title"></WYSIWYG>
        <div>
          <ScheduleItem v-for="upcoming of classes.slice(0, schedule.classes)" :upcoming="upcoming"></ScheduleItem>
        </div>
        <div v-if="classes.slice(0, schedule.classes).length === 0" class="text-2xl text-gray-500">
          No upcoming classes posted yet.
        </div>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG :content="schedule.disclaimer"></WYSIWYG>
        <a class="my-2" :href="'https://cancerfit.up.railway.app/assets/' + schedule.forms" target="_blank">
          <PillButton w="w-80">Download Forms</PillButton>
        </a>
      </TheCard>
      <TheCard>
        <WYSIWYG :content="schedule.partners"></WYSIWYG>
      </TheCard>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch() {
      this.schedule = await this.$api('Schedule')
      this.classes = await this.$api('Classes')

      this.classes.sort(function (a, b) {
        return new Date(a.date_and_time) - new Date(b.date_and_time)
      })
      for(let i = 0; i < this.classes.length; i++) {
        let single = this.classes[i]
        if(new Date().getTime() - 1000 * 60 * 60 > new Date(single.date_and_time).getTime()) {
          this.classes.shift()
          i--
        }
      }
    },
    data: () => ({
      schedule: {},
      classes: []
    }),
    head() {
      return {
        title: 'Schedule - CancerFIT'
      }
    }
  }
</script>