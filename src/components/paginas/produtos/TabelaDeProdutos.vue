<template>
  <div>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <!-- <th class="">#ID</th> -->
          <th>CODIGO</th>
          <th>DESCRICAO</th>
          <th>PREÇO</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="produto in produtos" :key="produto.codigo">
          <tr>
            <!-- <td class="col-1">{{ produto.pk }}</td> -->
            <td class="col-3">{{ produto.codigo }}</td>
            <td class="col-7">{{ produto.descricao }}</td>
            <td class="col-1">
              R$: {{ parseFloat(produto.preco).toFixed(2) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["produtos"],
};
</script>

<style></style>
