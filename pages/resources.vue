<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
      <TheCard>
        <WYSIWYG>
          <h1>Educational Resources</h1>
        </WYSIWYG>
        <div v-for="resource of resources">
          <TheVideo :src="resource.src">{{ resource.caption }}</TheVideo>
        </div>
      </TheCard>
    </div>
    <div>
      <TheCard>
        <WYSIWYG>
          <h1>Database of Studies</h1>
          <p>Click <a target="_blank"
              href="https://clinicaltrials.gov/ct2/results?cond=cancer&term=high+intensity+interval+training&cntry=&state=&city=&dist=">HERE</a>
            to be redirected to clinicaltrials.gov, a research
            database of privately and publicly funded clinical studies conducted around the world concerning HIIT and cancer.
          </p>
          <h1>Selected CancerFIT Evidence</h1>
          <p>Ashcraft K, Peace R, Betof A, Dewhirst M, Jones L. Efficacy
            and mechanisms of aerobic exercise on cancer initiation, progression, and metastasis: A critical systematic review
            of in vivo preclinical data. Cancer Res. 2016;76(14).</p>
          <p>Brown J, Huedo-Medina T, Pescatello L, Pescatello S, Ferrer R,
            Johnson B. Efficacy of exercise interventions in modulating cancer-related fatigue among adult cancer survivors: a
            meta-analysis. Cancer Epidemiol and Biomark Prev. 2011;20(1):123-33</p>
          <p>Friedenreich C, Neilson H, Farris M, Courneya K. Physical
            activity and cancer outcomes: a precision medicine approach. Clin Cancer Res. 2016;22(19):4766-4775.</p>
          <p>Jones L, Habel L, Weltzien E, Castillo A, Gupta D, Kroenke C,
            Kwan M, Queensberry C, Scott J, Sternfeld B, Yu, A, Kushi L, Caan B. Exercise and prognosis on the basis of
            clinicopathologic and molecular features in early stage breast cancer: The LACE and Pathways studies. Cancer Res.
            2016;76(18)5415.</p>
          <p>Jones L, Habel L, Weltzien E, Castillo A, Gupta D, Kroenke C,
            Kwan M, Queensberry C, Scott J, Sternfeld B, Yu, A, Kushi L, Caan B. Exercise and risk of cardiovascular events in
            women with non-metastatic breast cancer. J Clin Oncol. 2016;34(23):2743-2749.</p>
          <p>Jones L. A precision oncology framework for investigation of
            exercise as treatment for cancer. J Clin Oncol. 2015;33(35):4134-7.</p>
          <p>Lee K, Kang I, Mortimer JE, et al. Effects of high-intensity
            interval training on vascular function in breast cancer survivors undergoing anthracycline chemotherapy: Design of a
            pilot study. BMJ Open. 2018;8(6).</p>
          <p>Schmid D, Leitzmann M. Association between physical activity
            and mortality among breast cancer and colorectal cancer survivors: a systematic review and meta-analysis. Ann Oncol.
            2014;25(7):1293-1311.</p>
          <p>Scott K, Posmontier B. Exercise interventions to reduce
            cancer-related fatigue and improve health-related quality of life in cancer patients. Holist Nurs Pract.
            2017;31(2):66-79.</p>
        </WYSIWYG>
      </TheCard>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        resources: [
          {
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/marie_30_min_compressed_698.mp4"
          },
          {
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/cancerfit2_674.mp4"
          },
          {
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/carly_compressed__265.mp4"
          },
          {
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/jen_compressed_class_203.mp4"
          },
          {
            caption: "CancerFIT LIVE, 3/23",
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/3-23-20_429.mp4"
          },
          {
            caption: "​CancerFIT LIVE, 4/15",
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/barbara_4.8.19_live_314.mp4"
          },
          {
            caption: "​CancerFIT LIVE, 4/20",
            src: "https://www.cancerfit-ebe.com/uploads/b/10549706-628691397128386791/barbara_4.15.20_80s_theme_369.mp4"
          }
        ]
      }
    }
  }
</script>