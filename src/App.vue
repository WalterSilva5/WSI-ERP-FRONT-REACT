<template>
  <div>
    <div class="row col-12 corpo">
      <wsi-sidebar class="col-1 nav corpo" />
      <wsi-corpo class="col-11 corpo" />
    </div>
  </div>
</template>

<script>
import WsiSidebar from "./components/WsiSidebar.vue";
import WsiCorpo from "./components/WsiCorpo.vue";
import WsiFooter from "./components/WsiFooter.vue";
import "./assets/styles.scss"
import {$, jQuery} from 'jquery'


export default {
  name: "App",
  components: {
    WsiSidebar,
    WsiFooter,
    WsiCorpo,
  },
  created() {
    this.$store.dispatch("defaultnome");
  },
};
</script>

<style lang="scss" scoped>
.corpo{
  margin: 0 !important;
  padding: 0 !important;
}
</style>
