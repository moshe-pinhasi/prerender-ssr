<template>
  <div class="job-preview" @click="$emit('click', job)">
    <div><h2>{{ job.title }}</h2></div>
    <div><label>Location: </label>{{ job.location }}</div>
    <div><label>Company: </label>{{ job.company }}</div>
    <div><label>Type: </label>{{ job.type }}</div>
  </div>
</template>

<script>
export default {
  props: ["job"],
};
</script>

<style>
.job-preview {
  border: 1px solid;
  padding: 10px 5px;
}
.job-preview label {
  font-weight: 600;
}
.edit-link{
  text-decoration: underline;
}

</style>