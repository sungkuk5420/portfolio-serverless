<template>
  <div class="block-content">
    <h3 class="block-title">Portfolio</h3>
    <div class="row">
      <div class="col-md-12">
        <ul id="filters">
          <li class="active" @click="rebindScroll" data-filter="*">All</li>
          <li @click="rebindScroll" data-filter=".Web">Web</li>
          <li @click="rebindScroll" data-filter=".App">App</li>
          <li @click="rebindScroll" data-filter=".Crawler">Crawler</li>
          <li @click="rebindScroll" data-filter=".Desktop">Desktop</li>
          <li @click="rebindScroll" data-filter=".Game">Game</li>
          <li @click="rebindScroll" data-filter=".System">System</li>
        </ul>
        <div id="projects">
          <Project :item="item" v-for="(item,index) in portfolios" :key="index" />
        </div>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-12">
        <h4>Interested in working together?</h4>
        <a class="btn lowercase" onclick="contact();">sungkuk5420@gmail.com</a>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { T } from "../../store/module-example/types";
import { mapGetters } from "vuex";
import Project from "./Project";

export default {
  name: "ContentBlock",
  components: {
    Project
  },
  computed: {
    ...mapGetters({
      portfolios: "getPortfolios"
    })
  },
  mounted() {},
  methods: {
    rebindScroll() {
      if (window.scroll_bar) window.scroll_bar.destroy();
      setTimeout(() => {
        window.scroll_bar = new IScroll(".content-blocks.portfolio", {
          scrollbars: true,
          mouseWheel: true
        });
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
