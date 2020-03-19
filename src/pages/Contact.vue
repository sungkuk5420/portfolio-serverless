<template>
  <div class="content-blocks contact hidex">
    <section class="content">
      <ContentBlock />
    </section>
  </div>
</template>

<script>
import ContentBlock from "../projects/contact/ContentBlock";
export default {
  name: "Contact",
  components: {
    ContentBlock
  },
  mounted() {
    if (detectMobile()) {
      $(".content-blocks.contact").css("overflow-y", "scroll");
    } else {
      setTimeout(() => {
        new IScroll(".content-blocks.contact", {
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
