<template>
  <div class="project" :class="item.tags">
    <a class="open-project" href="/luxuryWatch">
      <div class="project-overlay">
        <div class="vcenter">
          <div class="centrize">
            <h4>{{item.title}}</h4>
            <p>{{item.subTitle}}</p>
          </div>
        </div>
      </div>
    </a>
    <img :src="item.image" alt />
  </div>
</template>

<script>
import { T } from "../../store/module-example/types";
import { mapGetters } from "vuex";

export default {
  name: "Project",
  props: ["item"],
  components: {},
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
.isotope-item {
  transition-property: transform, opacity;
  display: flex;
  justify-content: center;
  border: 1px solid #ddd;
}
</style>
