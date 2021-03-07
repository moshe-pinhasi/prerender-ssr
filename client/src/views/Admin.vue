<template>
  <div>
    <h1>Admin!</h1>

    <div>
      <h2>Add new</h2>
      <button @click="createNew">new job</button>
    </div>

    <div>
      <h2>list the jobs</h2>
      <label for="checkbox">show</label>
      <input type="checkbox" id="checkbox" v-model="showJobs">
      <job-list v-if="showJobs" />
    </div>
  </div>
</template>

<script>
import JobList from '@/components/JobList';

export default {
  name: 'Home',
  components: {
    JobList
  },
  data() {
    return {
      showJobs: false
    }
  },
  methods: {
    createNew() {
      this.$router.push({name: 'Edit'})
    }
  }
}
</script>
