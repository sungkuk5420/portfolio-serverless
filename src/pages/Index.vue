<template>
  <q-page class="flex flex-start index-page">
    <Loading />
    <Home />
    <TopNav />
  </q-page>
</template>

<script>
import Loading from "../projects/Loading";
import TopNav from "../projects/TopNav";
import Home from "./Home";
export default {
  name: "Index",
  components: {
    Loading,
    TopNav,
    Home
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
