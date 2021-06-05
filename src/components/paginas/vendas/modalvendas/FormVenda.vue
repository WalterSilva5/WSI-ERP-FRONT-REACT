<template>
  <div class="wsi-container form row align-items-center justify-content-between">
    <div class="col-5">
      <input
        type="text"
        class="form-control"
        placeholder="CODIGO OU DESCRIÇÃO DO PRODUTO"
      />
    </div>
    <div class="col-2 row align-items-center justify-content-around">
      <div class="d-flex justify-content-around col-1">
        <span>Quantidade</span>
      </div>
      <div class="d-flex justify-content-around col-1">
        <input type="text" class="form-control" style="width: 80px;" />
      </div>
    </div>
    <div class="d-flex justify-content-around col-2 ml-auto">
      <button class="btn wsi-btn-secondary">
        ADICIONAR
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.form {
  height: 50px;
}
</style>
