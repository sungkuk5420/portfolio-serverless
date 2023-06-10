<!-- eslint-disable prettier/prettier -->
<template>
  <div class="flex flex-start index-page">
    <Loading />
    <Home />
    <Portfolio />
    <Blog />
    <Contact />
    <TopNav />
    <ProjectModal/>
  </div>
</template>

<script>
import Loading from "../projects/Loading";
import TopNav from "../projects/TopNav";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";
import ProjectModal from "./ProjectModal";

export default {
  name: "Index",
  components: {
    Loading,
    TopNav,
    Home,
    Portfolio,
    Blog,
    Contact,
    ProjectModal
  },
  methods: {
    movePage(pageName) {
      this.$router.push(pageName);
    },
  },
  meta () {
		return {
			title: "金 城局です",
		}
	},
};
</script>

<style lang="scss">
.index-page {
  display: block;
}
</style>
