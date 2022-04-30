<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <TheCard>
        <WYSIWYG :content="content"></WYSIWYG>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG>
          <h1>CancerFIT Founders</h1>
          <div v-for="person of founders">
            <img :src="person.image" class="left-float">
            <h2>​{{ person.name }} – {{ person.title }}</h2>
            <p> {{ person.bio }}</p>
            </p>
          </div>
        </WYSIWYG>
      </TheCard>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: "<h1>Why CancerFIT?</h1>\n<p>CancerFIT was founded by Barbara Trencher and Sarah Urke while they were doctor of physical therapy students at Columbia University, as a means to provide an important service to cancer patients and survivors. Considerable data exists to support the hypothesis that exercise reduces the risk of cardiovascular disease among chemotherapy patients. Large studies have demonstrated that chemotherapy agents can decrease cardiovascular function but this decrease can be reduced or even eliminated if the patient exercises during the weeks or months they are receiving chemotherapy. Presently, researchers are conducting studies to determine whether exercise can improve treatment efficacy, prevent cancer recurrence and/or improve survival outcomes.</p>\n<h1>CancerFIT's Mission</h1>\n<p>The mission of CancerFIT is to provide cancer patients and survivors with complimentary evidence-based exercises classes designed to counter the physical and emotional effects of cancer and cancer treatment, improve quality of life and advance the science of exercise oncology.</p>\n<h1>CancerFIT's Vision</h1>\n<p>CancerFIT&rsquo;s vision is that evidence-based exercise will become an integral and routine part of cancer care available to all cancer patients and survivors.</p>",
        founders: [
          {
            name: "Barbara Trencher",
            title: "PT, DPT",
            image: "https://www.cancerfit-ebe.com/uploads/1/0/5/4/10549706/published/bltpicture.png?1573778341",
            bio: "Exercise was an important part of Barbara’s recovery after her breast cancer diagnosis. She ran and cycled throughout chemotherapy and radiation treatment, and credits exercise with helping her tolerate side effects.  Impassioned to bring evidence-based medicine to other cancer patients and survivors, Barbara co-founded CancerFIT while earning her doctorate in physical therapy.  In addition to serving as CancerFIT’s Executive Director and running its day-to-day operations, Barbara is an instructor and lecturer in the graduate program in physical therapy at Columbia University College of Physicians & Surgeons.  Prior to attending Columbia, Barbara earned her bachelor’s degree from Stanford University, and had a successful career as a litigator. She lives in Westchester with her family."
          },
          {
            name: "Sarah Urke",
            title: "PT, DPT",
            image: "https://www.cancerfit-ebe.com/uploads/1/0/5/4/10549706/published/img-1939.jpg?1573779434",
            bio: "While pursuing her doctorate in physical therapy at Columbia University, Sarah lost her father to cancer. She co-founded CancerFIT with the aim of using evidence-based medicine to bring strength and wellness to cancer patients.  Sarah is as an acute care physical therapist at New York Presbyterian Hospital and is also an instructor and lecturer in the doctorate of physical therapy program at Columbia University College of Physicians & Surgeons.  Prior to Columbia, Sarah graduated from the University of Southern California with a degree in Human Biology where she was an advocate for concussion awareness and conducted research in the USC Physical Therapy Program with Dr. Carolee Winstein. She lives in Manhattan with her partner, but calls Minnesota home."
          }
        ]
      }
    }
  }
</script>