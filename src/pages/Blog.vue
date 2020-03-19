<template>
  <div class="content-blocks blog hidex">
    <section class="content">
      <ContentBlock />
    </section>
  </div>
</template>

<script>
import ContentBlock from "../projects/blog/ContentBlock";
export default {
  name: "Blog",
  components: {
    ContentBlock
  },
  mounted() {
    if (detectMobile()) {
      $(".content-blocks.blog").css("overflow-y", "scroll");
    } else {
      setTimeout(() => {
        new IScroll(".content-blocks.blog", {
          scrollbars: true,
          mouseWheel: true
        });
      }, 1000);
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
