<template>
  <div style="display: contents">
    <div class="preloader">
      <div class="spinner">
        <strong
          ><span>Loading...</span><i class="fa-li fa fa-spinner fa-spin"></i
        ></strong>
      </div>
    </div>
    <div class="preloader-left "></div>
    <div class="preloader-right "></div>

    <div class="inline-menu-container hidex">
      <ul class="inline-menu">
        <li
          data-langtext
          class="about menu-item"
          onclick="about(); ga('send', 'event', 'portfolio','click','resumePage');"
        >
          履歴書
        </li>
        <li
          data-langtext
          class="portfolio menu-item"
          onclick="portfolio(); ga('send', 'event', 'portfolio','click','portfolioPage');"
        >
          ポートフォリオ
        </li>
        <li data-langtext class="blog menu-item" onclick="blog();">
          ブログ
        </li>
        <li data-langtext class="contact menu-item" onclick="contact();">
          連絡先
        </li>
        <li id="close" onclick="closeMenus();">×</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
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
