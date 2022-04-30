<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <TheCard>
        <WYSIWYG>
          <h1>Upcoming Classes</h1>
          <p>Just bring sneakers and get ready to workout with us!</p>
        </WYSIWYG>
        <div>
          <ScheduleItem v-for="upcoming of schedule" :date="upcoming.date"></ScheduleItem>
        </div>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG>
          <p>PCC Patients must RSVP by calling Integrative Health at 212-731-5806</p>
          <p>PCC medical clearance is required. PCC will obtain clearance from your doctor on your behalf.</p>
          <p>All instructors and patients must be fully vaccinated to participate</p>
        </WYSIWYG>
      </TheCard>
      <TheCard>
        <WYSIWYG>
          <h1>Columbia University Irving Medical Center</h1>
          <hr>
          <h1>NYU Langone Health Perlmutter Cancer Center*</h1>
          <p>*Must currently be under the care of an NYU Oncologist</p>
          <p>*Medical Clearance required prior to class</p>
        </WYSIWYG>
      </TheCard>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Complimentary Fitness Classes for Cancer Patients and Survivors ",
        description: "The primary purpose of CancerFIT is to provide cancer patients with the benefits of exercise and physical activity. CancerFIT also serves as an organic support group by bringing together patients who have similar experiences and allowing them to support one another.",
        schedule: [
          {
            date: "Wed, Mar 30th at 8:30 am"
          },
          {
            date: "Wed, Apr 6th at 8:30 am"
          },
          {
            date: "Wed, Apr 13th at 8:30 am"
          },
          {
            date: "Wed, Apr 20th at 8:30 am"
          },
          {
            date: "Wed, Apr 27th at 8:30 am"
          },
          {
            date: "Wed, May 3rd at 8:30 am"
          }
        ]
      }
    }
  }
</script>