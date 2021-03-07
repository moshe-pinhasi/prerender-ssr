<template>
  <div>
    <h1>filters</h1>
    <div>
      <select v-model="selected">
        <!-- inline object literal -->
        <option v-for="job in jobs" :value="job" :key="job._id">{{job.title}}</option>
      </select>
    </div>

    <div>
      <button @click="nav">Visit job </button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jobs: [],
      selected: null
    };
  },
  created() {
    this.jobs = window.jobs
    // console.log('this.$route.qeury.id', this.$route.qeury)
    console.log('this.jobs', this.jobs)
    this.selected = this.jobs[0]
  },
  methods: {
    nav() {
      this.$router.push('job/' + this.selected._id)
    }
  }
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