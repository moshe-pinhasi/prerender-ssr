<template>
  <section v-if="jobToEdit" class="job-edit">
    <form @submit.prevent="saveJob">
      <input type="text" placeholder="title" v-model="jobToEdit.title" />
      <input type="text" placeholder="location" v-model="jobToEdit.location" />
      <input type="text" placeholder="job_type" v-model="jobToEdit.job_type" />
      <input type="text" placeholder="company" v-model="jobToEdit.company" />
      <button>Save</button>
    </form>
    <pre>
        {{jobToEdit}}
    </pre>
  </section>
</template>

<script>
import { jobService } from '@/services/jobService.js';
export default {
  data() {
    return {
      jobToEdit: null,
    };
  },
  methods: {
    async saveJob() {
      try {
        await jobService.saveJob(this.jobToEdit);
        this.$router.push('/job');
      } catch (e) {
        console.error(e);
      }
    },
  },
  async created() {
    const { id } = this.$route.params;
    if (id) this.jobToEdit = await jobService.getJob(id);
    else this.jobToEdit = jobService.getEmptyJob();
  },
};
</script>

<style lang="scss" scoped>
.job-edit {
  form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 5px;
    }
  }
}
</style>