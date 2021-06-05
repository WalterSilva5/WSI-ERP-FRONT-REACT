<template>
  <div class="tabela">
    <table class="table table-striped table-bordered table-hover">
      <thead class="thead-dark">
        <th class="col-2">CODIGO</th>
        <th>DESCRIÇÃO</th>
        <th class="col-1">PREÇO</th>
        <th class="col-1">QUANTIDADE</th>
      </thead>
      <tbody v-for="produtovenda in produtosvenda" :key="produtovenda.pk">
        <tr>
          <td>TESTE</td>
          <td>TESTE</td>
          <td>TESTE</td>
          <td>TESTE</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtosvenda: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.tabela,
.table,
table {
  height: 69vh;
  overflow-y: auto;
}

tr,
td {
  height: 30px;
  white-space: nowrap;
}
</style>
