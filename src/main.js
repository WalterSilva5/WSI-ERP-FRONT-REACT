import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

import App from './App.vue'
import router from './router/routes.js'

import VueAxios from 'vue-axios'
import axios from 'axios'
import store from "./store/store.js"
import ApiProdutos from "./wsi-api/apiprodutos.js"

const app = createApp(App)

app.config.globalProperties.$apiprodutos = new ApiProdutos

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')