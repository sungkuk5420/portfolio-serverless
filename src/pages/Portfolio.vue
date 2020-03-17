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
      $("#project-modal").css("overflow-y", "scroll");
      $("#post-modal").css("overflow-y", "scroll");
      $(".content-blocks").css("overflow-y", "scroll");
    } else {
      new IScroll(".content-blocks.portfolio", {
        scrollbars: true,
        mouseWheel: true
      });
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
