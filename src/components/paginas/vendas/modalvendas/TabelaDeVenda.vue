<template>
  <div class="tabela">
    <table class="table table-striped table-bordered">
      <thead class="thead-dark text-light bg-dark">
        <tr>
          <th class="col-2" scope="row">CODIGO</th>
          <th>DESCRIÇÃO</th>
          <th class="col-1">PREÇO</th>
          <th class="col-1">QUANTIDADE</th>
        </tr>
      </thead>
      <tbody class="col-12">
        <template v-for="produtovenda in produtosvenda" :key="produtovenda.pk">
          <tr class="col-12">
            <td nowrap class="col-2" scope="row">{{ produtovenda.codigo }}</td>
            <td nowrap class="col">{{ produtovenda.descricao }}</td>
            <td nowrap class="col-1">{{ parseFloat(produtovenda.preco).toFixed(2) }}</td>
            <td nowrap class="col-1">{{ produtovenda.quantidade }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      produtosvenda: [],
    };
  },
  created() {
    this.$store.state.produtosDaVenda = [];
  },
  computed: {
    ...mapState({
      produtosDaVenda: "produtosDaVenda",
    }),
  },
  watch: {
    produtosDaVenda(newValue) {
      this.produtosvenda = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>

.tabela{
  height: 69vh;
}

table {
  max-height: 69vh;
  overflow: auto;
}

td,
th{
  white-space: nowrap;
}

tbody {
  margin-top: 0;
}
</style>
