<template>
  <div>
    <ul>
      <li v-for="job in jobs" :key="job._id">
        <job-preview :job="job" />
      </li>
    </ul>
    <paginator :page="page" :totalPages="totalPages" @set-new-page="setPage" />
  </div>
</template>

<script>
import { jobService } from '@/services/jobService';
import JobPreview from './JobPreview.vue';
import Paginator from './Paginator.vue';

export default {
  components: { JobPreview, Paginator },
  data() {
    return {
      jobs: null,
      filterBy: null,
      page: 1,
      totalPages: 0,
      headOptions: null,
    };
  },
  created() {
    this.getJobs();
  },
  methods: {
    async getJobs() {
      try {
        const { jobs, total } = await jobService.getJobs(this.page, this.$route.query);
        this.jobs = jobs;
        this.totalPages = Math.ceil(total / 10);
      } catch (e) {
        console.error(e);
      }
    },
    setPage(pageNum) {
      this.page = pageNum;
      this.getJobs();
    },
    // async getHeadOptions() {
    //   this.headOptions = await jobService.getHeadOptions();
    //   this.$emit('updateHead');
    // },
  },
  // head() {
  //   return this.headOptions;
  // },
};
</script>
 
<style lang="scss" scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1.5rem;
}
.list-title {
  display: block;
}
.add-link {
  text-decoration: underline;
}
</style>