<template>
  <div>
    <div class=" modal-vendas">
      <div class="modal-dialog modal-lg" role="document" style="max-width: 100%;" >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">PONTO DE VENDA</h5>
            <button class="btn wsi-btn btn-danger btn-sm" @click="$emit('abrirModalVendas')">FECHAR</button>
          </div>
          <div class="modal-body">
            <form-venda/>
            <tabela-de-venda/>
            <footer-venda/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormVenda from "./modalvendas/FormVenda.vue"
import FooterVenda from "./modalvendas/Footervenda.vue"
import TabelaDeVenda from "./modalvendas/TabelaDeVenda.vue"
export default {
  components: { FormVenda, FooterVenda, TabelaDeVenda},
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
height:100vh;
  border-radius: 0;
}
</style>
