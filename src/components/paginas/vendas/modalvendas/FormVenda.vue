<template>
  <div
    class="wsi-container form row align-items-center justify-content-between"
  >
    <div class="col-5">
      <input
        type="text"
        class="form-control"
        placeholder="CODIGO DO PRODUTO"
        v-model="produtoAtual"
      />
    </div>
    <div class="col-2 row align-items-center justify-content-around">
      <div class="d-flex justify-content-around col-1">
        <span>Quantidade</span>
      </div>
      <div class="d-flex justify-content-around col-1">
        <input type="text" class="form-control" style="width: 80px;" v-model="quantidadeAtual" />
      </div>
    </div>
    <div class="d-flex justify-content-around col-2 ml-auto">
      <button class="btn wsi-btn-secondary" @click="adicionar">
        ADICIONAR
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtoAtual: "",
      quantidadeAtual: 1
    };
  },
  methods: {
    adicionar() {
      let produto = this.$store.state.produtos.filter(
        (produto) => produto.codigo == this.produtoAtual
      );
      produto = {...{...{...produto}[0]}}
      produto.quantidade = this.quantidadeAtual
      this.$store.dispatch("addProdutosDaVenda",produto)
      this.produtoAtual=""
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  height: 50px;
}
</style>
