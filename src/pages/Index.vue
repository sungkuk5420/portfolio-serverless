<template>
  <div class="flex flex-start index-page">
    <Loading />
    <Home />
    <Portfolio />
    <TopNav />
    <div class="modal fade" id="project-modal" style>
      <div class="modal-dialog">
        <div class="modal-content"></div>
      </div>
      <div class="inline-menu-container">
        <a id="modal-close" class="close" data-dismiss="modal" onclick="modalScroll.destroy();">
          <span aria-hidden="true">&times;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../projects/Loading";
import TopNav from "../projects/TopNav";
import Home from "./Home";
import Portfolio from "./Portfolio";
export default {
  name: "Index",
  components: {
    Loading,
    TopNav,
    Home,
    Portfolio
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
