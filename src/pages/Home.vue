<template>
  <section class="home">
    <div class="container">
      <HomeNameBlock />
      <HomeMenuBlock />
      <div class="content-blocks about hidex"></div>
    </div>
  </section>
</template>

<script>
import HomeNameBlock from "../projects/HomeNameBlock";
import HomeMenuBlock from "../projects/HomeMenuBlock";
export default {
  name: "TopNav",
  components: {
    HomeNameBlock,
    HomeMenuBlock
  },
  mounted() {
    $(".preloader").fadeOut("slow", function() {
      $(".preloader-left").addClass("slide-left");
      $(".preloader-right").addClass("slide-right");
      $("#portfolio-case").addClass("full-portfolio");
    });
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
