<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal v-if="header">
      <q-toolbar>
        <q-toolbar-title>{{title}}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
  },
  props: ["header", "title"],
  data() {
    return {
      left: false
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>