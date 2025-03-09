// Importando as dependências necessárias
import { createStore } from 'vuex';
import axios from 'axios';

// URL base da API obtida das variáveis de ambiente
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

// Criando e exportando a store do Vuex
export default createStore({
    // Estado global da aplicação
    state: {
        cepData: null,    // Armazena os dados do CEP consultado
        error: null,      // Armazena mensagens de erro
    },

    // Mutations para atualizar o estado
    mutations: {
        // Define os dados do CEP e limpa erros
        setCepData(state, data) {
            state.cepData = data;
            state.error = null;
        },
        // Define uma mensagem de erro e limpa dados do CEP
        setError(state, error) {
            state.error = error;
            state.cepData = null;
        }
    },

    // Actions para operações assíncronas
    actions: {
        // Busca os dados do CEP na API
        async fetchCep({ commit }, cep) {
            try {
                // Faz a requisição para a API
                const response = await axios.get(`${API_BASE_URL}/cep/${cep}`);
                // Atualiza o estado com os dados recebidos
                commit('setCepData', response.data);
            } catch (error) {
                // Em caso de erro, atualiza o estado com a mensagem de erro
                commit('setError', error.response?.data?.error || 'Erro ao buscar CEP');
            }
        }
    }
});
