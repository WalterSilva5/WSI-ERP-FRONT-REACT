<template>
  <div>
    <div class="row ">
      <div
        class="d-flex justify-content-between align-items-center rodape wsi-container"
      >
        <div><button class="btn wsi-btn-primary">FINALIZAR VENDA</button></div>
        <h1 class="text-primary"><b>TOTAL R$: {{parseFloat(total).toFixed(2)}}</b></h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
      return {
        total: 0
      }
    },
    computed: {
    ...mapState({
      produtosDaVenda: "produtosDaVenda",
    }),
  },
  watch: {
    produtosDaVenda(newValue) {
    
      console.log(newValue)
      let new_total = 0
      newValue.forEach((item, index)=>{
        console.log(item)
        new_total+=(parseFloat({...item}.preco*{...item}.quantidade))})
      this.total = new_total;
      console.log(this.total)
    }
  },
};
</script>

<style lang="scss" scoped>
.rodape {
  height: 80px;
}
</style>
