<template>
  <div>
    <div class="modal-vendas">
      <div
        class="modal-dialog modal-lg"
        role="document"
        style="max-width: 100%;"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">CADASTRAR PRODUTO</h5>
            <button @click="fechar" class="btn btn-danger">
              <b>FECHAR</b>
            </button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <div class="col-md-8 wsi-container container">
              <form class="form" autocomplete="off" id="formCadastroProduto">
                <div class="form-grop mt-3">
                  <label for="codigo"
                    >CODIGO<span class="text-danger">{{
                      erroCodigo
                    }}</span></label
                  >
                  <input name="codigo" class="form-control" v-model="codigo" />
                </div>
                <div class="form-group mt-3">
                  <label for="descricao">DESCRICAO</label>
                  <input
                    type="text"
                    name="descricao"
                    class="form-control"
                    v-model="descricao"
                  />
                </div>
                <div class="d-flex justify-content-around">
                  <!-- <div class="form-group col-lg-4 mt-3">
                    <label for="estoque">ESTOQUE<span class="text-danger">{{
                      erroEstoque
                    }}</span></label>
                    <input
                      type="text"
                      name="estoque"
                      class="form-control"
                      v-model="estoque"
                    />
                  </div> -->
                  <div class="form-group col-lg-4 ml-4 mt-3">
                    <label for="preco"
                      >PREÇO<span class="text-danger">{{
                        erroPreco
                      }}</span></label
                    >
                    <input
                      type="text"
                      name="preco"
                      class="form-control"
                      v-model="preco"
                    />
                  </div>
                </div>
                <div id="alerts" class="mt-3" v-show="mensagem">
                  <div class="alert alert-danger" role="alert" v-if="erro">
                    {{ mensagemDeErro }}
                  </div>
                  <div class="alert alert-success" role="alert" v-else>
                    CADASTRO CONCLUDO COM SUCESSO!
                  </div>
                </div>
              </form>
              <div
                class="d-flex align-items-end flex-column"
                style="height: 200px;"
              >
                <div class="mt-auto p-2">
                  <button class="btn wsi-btn-primary" @click="cadastrar">
                    CADASTRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function dataDefaults() {
  return {
    mensagemDeErro: "OCORREU UM ERRO!",
    erro: true,
    mensagem: false,
    codigo: 0,
    descricao: "",
    estoque: 0,
    preco: 0,

    erroCodigo: "",
    erroDescricao: "",
    erroEstoque: "",
    erroPreco: "",
  };
}
function validarValor(valor) {
  try {
    let novovalor = valor;
    if (novovalor == parseFloat(valor)) {
      return true;
    } else {
      throw "";
    }
  } catch {
    return false;
  }
}
export default {
  data: dataDefaults,
  methods: {
    fechar(event) {
      Object.assign(this.$data, dataDefaults());
      this.$emit("abrirModalCadastroProduto");
      this.$router.replace("/vendas")
    },
    cadastrar() {
      var result = this.$apiprodutos.cadastrar({
        codigo: this.codigo,
        descricao: this.descricao,
        preco: this.preco,
        // estoque: this.estoque
      });
      result
        .then((result) => {
          if (result.data == undefined) {
            this.mensagem = true;
            this.erro = true;
          } else {
            // console.log(result.status)
            this.mensagem = true;
            this.erro = false;
          }
        })
        .catch((erro) => {
          console.log(erro);
        });
    },
  },
  watch: {
    codigo(codigo) {
      if (!validarValor(codigo)) {
        this.erroCodigo = "CODIGO INVALIDO";
      } else {
        this.erroCodigo = " ";
      }
    },
    estoque(estoque) {
      if (!validarValor(estoque)) {
        this.erroEstoque = "CODIGO INVALIDO";
      } else {
        this.erroEstoque = " ";
      }
    },
    preco(preco) {
      if (!validarValor(preco)) {
        this.erroPreco = "CODIGO INVALIDO";
      } else {
        this.erroPreco = " ";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  height: 300px;
  padding: 0;
}
.modal-vendas {
  height: 600px;
}
.modal-dialog {
  margin: 0;
  padding: 0;
}
.modal-content {
  height: 100%;
  border-radius: 0;
}
</style>
