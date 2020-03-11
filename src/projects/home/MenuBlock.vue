<template>
  <div class="menu-blocks">
    <div class="about-block">
      <div class="about-block-container">
        <h2
          data-langtext
          class="about menu-item"
          onclick="about(); ga('send', 'event', 'portfolio','click','resumePage');"
        >
          履歴書
        </h2>
      </div>
    </div>
    <div class="portfolio-block">
      <div class="portfolio-block-container">
        <h2
          data-langtext
          class="portfolio menu-item"
          onclick="portfolio(); ga('send', 'event', 'portfolio','click','portfolioPage');"
        >
          ポートフォリオ
        </h2>
      </div>
    </div>
    <div class="blog-block">
      <div class="blog-block-container">
        <h2 data-langtext class="blog menu-item" onclick="blog();">
          ブログ
        </h2>
      </div>
    </div>
    <div class="contact-block">
      <div class="contact-block-container">
        <h2 data-langtext class="contact menu-item" onclick="contact();">
          連絡先
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuBlock",
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
