import { createStore } from "vuex";
import axios from "axios";

const state = {
    idade: 24,
};

const getters = {
    getIdade(state) {
        return "idade: " + state.idade;
    },
    getNome(state) {
        return "nome: " + state.nome;
    },
};

const mutations = {
    setNome(state, novoNome) {
        state.nome = novoNome;
    },

    setProdutos(state, produtos) {
        state.produtos = produtos;
    }
};

const actions = {
    changeNome(context, dados) {
        context.commit("setNome", dados);
    },

    defaultnome(context) {
        axios.get("https://api.github.com/users/waltersilva5").then((response) => {
            context.commit("setNome", response.data.login);
        });
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