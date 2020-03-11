<template>
  <button-layer layerName="text-size" position="bottom">
    <div class="col">
      <div class="row">
        <div class="slider-area col">
          <div class="text-warpper">
            <String text="サイズ" color="white" size="xs"></String>
          </div>
          <div class="slider-waspper">
            <q-slider
              v-model="updateTextPenWeightSliderValue"
              @input="changeUpdateTextPenWeightSlider"
              :min="1"
              :max="10"
              color="white"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="slider-area col">
          <div class="text-warpper">
            <String text="太さ" color="white" size="xs"></String>
          </div>
          <div class="row buttons">
            <customButton
              label="細い"
              textColor="#444444"
              bgcolor="#FFFFFF"
              :clickFunc="fontWeightSm"
            />
            <customButton
              label="普通"
              textColor="#444444"
              bgcolor="#FFFFFF"
              :clickFunc="fontWeightMd"
            />
            <customButton
              label="太い"
              textColor="#444444"
              bgcolor="#FFFFFF"
              :clickFunc="fontWeightLg"
            />
          </div>
        </div>
      </div>
    </div>
  </button-layer>
</template>

<script>
import { T } from "../store/module-example/types";
import { mapGetters } from "vuex";
import ButtonLayer from "./ButtonLayer";
import String from "../components/String";
import CustomButton from "../components/CustomButton";

export default {
  name: "TextSizeLayer",
  props: [],
  data() {
    return {
      updateTextPenWeightSliderValue: 1
    };
  },
  components: {
    String,
    CustomButton,
    ButtonLayer
  },
  computed: {
    ...mapGetters({
      footerActiveTab: "getFooterActiveTab"
    })
  },
  methods: {
    changeUpdateTextPenWeightSlider(value) {
      this.$store.dispatch(T.CHANGE_TEXT_PEN_WEIGHT_SLIDER_VALUE, value);
    },
    fontWeightSm() {
      const activeObj = window.makerCanvas.getActiveObject();
      activeObj.set({
        fontWeight: "lighter"
      });
      window.makerCanvas.renderAll();
    },
    fontWeightMd() {
      const activeObj = window.makerCanvas.getActiveObject();
      activeObj.set({
        fontWeight: "normal"
      });
      window.makerCanvas.renderAll();
    },
    fontWeightLg() {
      const activeObj = window.makerCanvas.getActiveObject();
      activeObj.set({
        fontWeight: "bold"
      });
      window.makerCanvas.renderAll();
    }
  }
};
</script>

<style lang="scss">
.button-layer.text-size {
  height: 180px;
  .buttons {
    margin-top: 10px;
    justify-content: space-between;
    .custom-button {
      width: 95px;
    }
  }
}

.q-slider__track-container {
  height: 4px;
}

.q-slider__thumb {
  transform: scale3d(1, 1, 1) !important;
}
</style>
<style lang="scss" scope></style>
