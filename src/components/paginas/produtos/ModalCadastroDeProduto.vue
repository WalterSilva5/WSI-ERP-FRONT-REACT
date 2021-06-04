<template>
  <div>
    <div class=" modal-vendas">
      <div class="modal-dialog modal-lg" role="document" style="max-width: 100%;" >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">CADASTRAR PRODUTO</h5>
            <button class="btn wsi-btn btn-danger" @click="$emit('abrirModalCadastroProduto')">FECHAR</button>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.modal-dialog {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.modal-content {
  height: 100%;
  min-height: 600px;
  border-radius: 0;
}
</style>
