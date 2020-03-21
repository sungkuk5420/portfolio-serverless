<template>
  <div class="project" :class="item.tags">
    <a class="open-project" href="#" @click="function(){openModal(item.id)}">
      <div class="project-overlay">
        <div class="vcenter">
          <div class="centrize">
            <h4 data-langtext>{{ item.title }}</h4>
            <p data-langtext>{{ item.subTitle }}</p>
          </div>
        </div>
      </div>
    </a>
    <img :src="item.mainImage" alt />
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
  mounted() {
    
  },
  methods: {
    openModal (id) {
      this.$store.dispatch(T.CHANGE_PROJECT_MODAL_DATA, {
        data:id,
        cb:()=>{
        var projectUrl = $(this).attr("href");
        projectUrl = "test";
        $("#project-modal")
          .modal("show")
          .find(".modal-content");
        setTimeout(function() {
          modalScroll = new IScroll(".modal", {
            scrollbars: true,
            mouseWheel: true
          });
        }, 200);
      }});
    }
  }
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
