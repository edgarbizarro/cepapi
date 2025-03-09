// Importando os módulos necessários do Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';

// Definindo as rotas da aplicação
const routes = [
    {
        path: '/',            // Rota raiz
        component: HomeView   // Componente da página inicial
    },
    {
        path: '/buscar',      // Rota de busca de CEP
        component: SearchView // Componente da página de busca
    }
];

// Criando o router com histórico web
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Exportando o router para uso no main.js
export default router;
