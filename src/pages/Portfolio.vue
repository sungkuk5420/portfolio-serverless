<template>
  <div class="content-blocks portfolio hidex">
    <section class="content">
      <ContentBlock />
    </section>
  </div>
</template>

<script>
import ContentBlock from "../projects/portfolio/ContentBlock";
export default {
  name: "Portfolio",
  components: {
    ContentBlock
  },
  mounted() {
    if (detectMobile()) {
      $(".content-blocks.portfolio").css("overflow-y", "scroll");
    } else {
      setTimeout(() => {
        window.scroll_bar = new IScroll(".content-blocks.portfolio", {
          scrollbars: true,
          mouseWheel: true
        });
      }, 1000);
    }

    $(".menu-item").on("click", function() {
      //Portfolio masonry
      var $container = $("#projects");
      $container.isotope({
        masonry: {
          columnWidth: 0
        },
        itemSelector: ".project"
      });

      //Portfolio filters
      $("#filters").on("click", "li", function() {
        $("#filters li").removeClass("active");
        $(this).addClass("active");
        var filterValue = $(this).attr("data-filter");
        $container.isotope({ filter: filterValue });
      });
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
