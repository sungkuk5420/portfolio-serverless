<template>
    <div class="modal fade" id="project-modal" style>
      <div class="modal-dialog">
        <div class="modal-content"> 
          <div id="project">
            <section class="content">
              <div class="block-content">
                <div class="project-title">
                  <h2>Luxury Watch</h2>
                  <p class="tags">Graphic / Apps</p>
                </div>
                <p class="project-description">
                  Omnium nominati prodesset pri no. Per dolor gloriatur persequeris ad, te
                  his aliquip molestie. Veri tantas ad usu, mel ne sonet quaeque
                  assueverit. Enim eruditi euripidis his et, dictas admodum posidonium ei
                  pro. An duo tempor maluisset honestatis. Ne cum invidunt constituto,
                  sanctus accusam an usu, ea mandamus incorrupte mel. Pro cu purto graeco.
                  Wisi sonet elitr eos in. Est sint magna mucius te, iudico integre
                  gubergren no vis. Assum doming et pro, est ei inermis corpora
                  argumentum. Eos graece sadipscing et, pri dico salutandi consetetur et,
                  explicari voluptatum mei at. Ex cum nisl epicurei, sea in molestie
                  theophrastus, nibh tollit apeirian no vis. Eum an vocibus gubergren
                  intellegam, quo id soluta iisque phaedrum.
                </p>
                <div class="project-media">
                  <div id="image_container">
                    <img src="statics/images/portfolio/1.png" @click="openImageGallery" data-bp="statics/images/portfolio/1.png" class="example" />
                    <img src="statics/images/portfolio/6.png" @click="openImageGallery" data-bp="statics/images/portfolio/6.png" />
                    <img src="statics/images/portfolio/7.png" @click="openImageGallery" data-bp="statics/images/portfolio/7.png" class="example" />
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
import BigPicture from 'bigpicture'
export default {
  name: "Blog",
  components: {
  },
  mounted() {
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
