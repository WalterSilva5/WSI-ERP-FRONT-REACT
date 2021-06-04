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
};

const actions = {
    changeNome(context, dados) {
        context.commit("setNome", dados);
    },

    defaultnome(context) {
        axios
            .get("https://api.github.com/users/waltersilva5")
            .then(response => {
                context.commit("setNome", response.data.login)
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