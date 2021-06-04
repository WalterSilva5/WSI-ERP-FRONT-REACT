<template>
  <div class="col-12 container-fluid corpo-margem">
    <header-top>
      <div>
        <button
          class="btn wsi-btn-secondary wsi-btn-menu-shadow"
          data-toggle="modal"
          data-target="#modalVendas"
          @click="abrirModalCadastroProduto(true)"
        >
          CADASTRAR
        </button>
      </div> </header-top
    ><modal-cadastro-produto
      @abrirModalCadastroProduto="abrirModalCadastroProduto"
      class="modal-dialogo wsi-fade"
      v-show="modalCadastroProdutoAtivo"
    />
  </div>
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import ModalCadastroProduto from "./produtos/ModalCadastroDeProduto.vue";
export default {
  components: {
    HeaderTop,
    ModalCadastroProduto,
  },
  data() {
    return {
      modalCadastroProdutoAtivo: false,
    };
  },
  methods: {
    abrirModalCadastroProduto(state = false) {
      this.modalCadastroProdutoAtivo = state;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
