<template>
  <div>
    <div class="row col-12 m-0 p-0">
      <wsi-sidebar class="col-1 m-0 p-md-0 p-sm-n5 nav" />
      <wsi-corpo class="col-md-11 p-md-0 m-0 p-sm-n5"/>
    </div>
  </div>
</template>

<script>
import WsiSidebar from "./components/WsiSidebar.vue";
import WsiCorpo from "./components/WsiCorpo.vue";
import WsiFooter from "./components/WsiFooter.vue";
import "./assets/styles.scss"
export default {
  name: "App",
  components: {
    WsiSidebar,
    WsiFooter,
    WsiCorpo,
  },
  created() {
    this.$store.dispatch("fetchProdutos");
  },
};
</script>

<style lang="scss" scoped>

</style>
