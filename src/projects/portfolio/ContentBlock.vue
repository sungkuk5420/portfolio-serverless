<template>
  <div class="block-content">
    <h3 class="block-title">Portfolio</h3>
    <div class="row">
      <div class="col-md-12">
        <ul id="filters">
          <li class="active" data-filter="*">All</li>
          <li data-filter=".graphic">Graphic</li>
          <li data-filter=".web">Web</li>
          <li data-filter=".video">Video</li>
          <li data-filter=".apps">Apps</li>
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
  methods: {}
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
