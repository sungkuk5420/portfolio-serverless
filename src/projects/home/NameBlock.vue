<template>
  <div class="name-block">
    <div class="name-block-container">
      <span
        data-langtext
        style="font-size: 28px; font-weight: 300; display: block; text-transform: capitalize;line-height: 60px; color : white"
        >初めまして</span
      >
      <h1 data-langtext>金 城局です。</h1>
      <h2 data-langtext>ウェブエンジニア</h2>
      <ul class="social">
        <!-- <li>
          <a
            href="#"
            onclick="window.open('https://www.facebook.com/sungkuk5420');"
            ><i class="fa fa-facebook"></i
          ></a>
        </li> -->
        <li>
          <a
            href="#"
            onclick="window.open('https://github.com/sungkuk5420');"
            ><i class="fa fa-github"></i
          ></a>
        </li>
        <li>
          <a href="#" onclick="textTranslateAll('ko');"
            ><img class="flag flag-kr"
          /></a>
        </li>
        <li>
          <a href="#" onclick="textTranslateAll('ja');"
            ><img class="flag flag-jp"
          /></a>
        </li>
        <li>
          <a href="#" onclick="textTranslateAll('en');"
            ><img class="flag flag-us"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NameBlock",
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
