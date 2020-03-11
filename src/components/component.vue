<template>
  <q-btn
    :class="[
      'custom-button',
      disableButton ? 'disable-button' : '',
      icon ? 'icon-button' : '',
      iconRight ? 'icon-right-button' : ''
    ]"
    :label="label"
    @click="checkClickFunc"
    :icon="icon ? icon : ''"
    :icon-right="iconRight ? iconRight : ''"
    :ripple="rippleData"
    :style="{ background: bgcolor, color: textColor }"
  />
</template>

<script>
export default {
  name: "CustomButton",
  props: [
    "label",
    "clickFunc",
    "textColor",
    "bgcolor",
    "icon",
    "iconRight",
    "disableButton"
  ],
  data() {
    return {
      rippleData: true
    };
  },
  methods: {
    checkClickFunc() {
      if (event.target.classList.contains("disable-button")) {
        this.rippleData = false;
        return false;
      }
      console.log("checkClickFunc");
      this.rippleData = true;
      this.clickFunc ? this.clickFunc() : "";
    }
  }
};
</script>
<style lang="scss">
.custom-button {
  font-size: 20px;
  line-height: 1;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 45px;
  &.disable-button {
    opacity: 0.7 !important;
  }
  &.icon-button {
    .q-icon {
      position: absolute;
      left: 7%;
    }
  }
  &.icon-right-button {
    .q-icon {
      position: absolute;
      right: 7%;
    }
  }
}
</style>
