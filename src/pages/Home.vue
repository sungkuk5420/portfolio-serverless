<template>
  <section class="home">
    <div class="container">
      <NameBlock />
      <MenuBlock />
      <ContentBlock />
    </div>
  </section>
</template>

<script>
import NameBlock from "../projects/home/NameBlock";
import MenuBlock from "../projects/home/MenuBlock";
import ContentBlock from "../projects/home/ContentBlock";
export default {
  name: "Home",
  components: {
    NameBlock,
    MenuBlock,
    ContentBlock
  },
  mounted() {
    $(".preloader").fadeOut("slow", function() {
      $(".preloader-left").addClass("slide-left");
      $(".preloader-right").addClass("slide-right");
      $("#portfolio-case").addClass("full-portfolio");
    });

    updateProjectCount();
    if (detectMobile()) {
      $(".content-blocks.about").css("overflow-y", "scroll");
    } else {
      new IScroll(".content-blocks.about", {
        scrollbars: true,
        mouseWheel: true
      });
    }
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
