<template>
  <div class="similar-jobs">
    <h2>Similar Jobs</h2>
    <job-preview v-for="job in similarJobs" 
      :key="job._id" 
      :job="job"
      @click="jobClicked" />
  </div>
</template>

<script>
import JobPreview from '../components/JobPreview.vue';
const selector = "#job-desc"

export default {
  components: { JobPreview },
  data() {
    return {
      el: null,
      similarJobs: []
    };
  },
  created() {
    this.el = document.querySelector(selector)
    this.displaySimilar(this.$route.params.id)
  },
  methods: {
    displaySimilar(id) {
      console.log('displaySimilar');
      this.similarJobs = window.jobs.filter(job => job._id !== id).splice(0,3)
    },
    jobClicked(job) {
      const ctgs = job.ctgs.reduce((acc, ctg) => {
        return acc + `
        <li class="ctg-item">
            <p>${ctg}</p>
        </li>`
      }, '')
                
      const temp = `
        <h4>Job Title: ${job.title}</h4>
        <p>Location: ${job.location}</p>
        <p>Company : ${job.company}</p>
        <p>Type : ${job.type}</p>

        <p>ctgs</p>
        <ul>${ctgs}</ul>
      `

       this.el.innerHTML = temp
       this.$router.replace({ name: this.$route.name, params: {id: job._id} })
       this.displaySimilar(job._id)
    }
  },
};
</script>

<style lang="scss" scoped>
.job-details-container {
  div {
    margin-bottom: 1rem;
  }
}
</style>