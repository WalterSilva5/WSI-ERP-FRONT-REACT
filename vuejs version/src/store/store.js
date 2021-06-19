import { createStore } from "vuex";
import axios from "axios";

const state = {
    produtosDaVenda: []
};

const getters = {
    getProdutos(state) {
        return state.getProdutos;
    },
};

const mutations = {
    setProdutos(state, produtos) {
        state.produtos = produtos;
    },
    addProdutosDaVenda(state, produto) {
        state.produtosDaVenda = [...state.produtosDaVenda, {...produto }]
    }
};

const actions = {
    addProdutosDaVenda(context, produto) {
        context.commit('addProdutosDaVenda', {...produto })
    },
    fetchProdutos(context) {
        axios.get("http://localhost:8595/produtos/")
            .then((response) => {
                context.commit("setProdutos", response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
});

export default store;