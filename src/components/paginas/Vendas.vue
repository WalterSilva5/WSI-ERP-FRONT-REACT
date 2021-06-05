<template>
  <div class="col-12 container-fluid corpo-margem wsi-fade">
    <header-top>
      <div>
        <button
          class="btn wsi-btn-secondary wsi-btn-menu-shadow"
          data-toggle="modal"
          data-target="#modalVendas"
          @click="abrirModalVendas(true)"
        >
          PDV
        </button>
      </div>
      </header-top
    ><modal-vendas @abrirModalVendas="abrirModalVendas" class="modal-dialogo wsi-fade" v-show="modalVendasAtivo" />
  </div>
</template>

<script>
import ModalVendas from "./vendas/ModalVendas.vue";
import HeaderTop from "./components/HeaderTop.vue";
export default {
  components: {
    HeaderTop,
    ModalVendas,
  },
  data() {
    return {
      modalVendasAtivo: false,
    };
  },
  methods: {
    abrirModalVendas(state=false) {
      this.modalVendasAtivo = state;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
