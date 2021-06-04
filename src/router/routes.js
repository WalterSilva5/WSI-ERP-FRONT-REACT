import { createRouter, createWebHashHistory } from 'vue-router'
import vendas from "../components/paginas/Vendas.vue"
import produtos from "../components/paginas/Produtos.vue"

const routes = [{
        path: '/vendas',
        component: vendas
    },
    {
        path: '/produtos',
        component: produtos
    }
]

const router = createRouter({
    linkExactActiveClass: 'link-active',
    history: createWebHashHistory(),
    routes
})

export default router