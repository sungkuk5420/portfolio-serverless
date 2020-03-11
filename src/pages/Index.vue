<template>
  <q-page class="flex flex-start index-page">
    <div>
      index page
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Index",
  components: {
  },
  methods: {
    movePage(pageName) {
      this.$router.push(pageName);
    }
  }
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
