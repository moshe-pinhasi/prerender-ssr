<template>
  <div class="paginator-container">
    <div class="page-buttons">
      <button v-if="page > 1" @click="routeToNewPage(page - 1)">-</button>
    </div>
    <div class="page-number">{{ page }} of {{totalPages}}</div>
    <div class="page-buttons" v-if="totalPages > page">
      <button @click="routeToNewPage(page + 1)">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page", "totalPages"],
  methods: {
    routeToNewPage(pageNum) {
      if (pageNum <= 0) return;
      this.$emit("set-new-page", pageNum);
    },
  },
};
</script>

<style>
.paginator-container {
  display: flex;
  justify-content: center;
}
</style>