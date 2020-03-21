<template>
    <div class="modal fade" id="project-modal" style>
      <div class="modal-dialog">
        <div class="modal-content"> 
          <div id="project">
            <section class="content">
              <div class="block-content">
                <div class="project-title">
                  <h2>{{projectModalData.title}}</h2>
                  <p class="tags">{{projectModalData.tags.join(' / ')}}</p>
                </div>
                <p class="project-description">
                  {{projectModalData.content}}
                </p>
                <div class="project-media">
                  <div id="image_container">
                    <img :src="imagePath" @click="openImageGallery" :data-bp="imagePath" v-for="(imagePath, index) in projectModalData.subImages" v-bind:key="index" class="example" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="inline-menu-container">
        <a id="modal-close" class="close" data-dismiss="modal" onclick="modalScroll.destroy();">
          <span aria-hidden="true">&times;</span>
        </a>
      </div>
    </div>
</template>

<script>
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";

import BigPicture from 'bigpicture'
export default {
  name: "Blog",
  components: {
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      projectModalData: "getProjectModalData"
    })
  },
  methods: {
    openImageGallery(e) {
      BigPicture({
        el: e.target,
        gallery: '#image_container',
      });
    },
  }
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
