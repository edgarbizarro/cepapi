<!-- 
  SearchView.vue - Página de consulta de CEP
  Esta página permite que o usuário pesquise um endereço através do CEP,
  utilizando Vuex para gerenciamento de estado e integração com a API de CEP.
-->
<template>
  <div class="search">
    <!-- Título da página -->
    <h1>Consulta de CEP</h1>
    
    <!-- Botão para voltar à página inicial -->
    <router-link to="/" class="back-button">Voltar</router-link>
    
    <div class="search-container">
      <!-- Grupo de entrada de CEP -->
      <div class="input-group">
        <input 
          type="text" 
          v-model="cep" 
          @input="formatCep"
          placeholder="Digite o CEP (00000-000)"
          maxlength="9"
        >
        <!-- Botão de busca (desabilitado se CEP for inválido) -->
        <button @click="buscarCep" :disabled="!isValidCep">Buscar</button>
      </div>
      
      <!-- Mensagem de erro (se houver) -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- Exibição do resultado da busca -->
      <div v-if="endereco" class="result">
        <h2>Endereço Encontrado:</h2>
        <div class="address-info">
          <p><strong>CEP:</strong> {{ endereco.cep }}</p>
          <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
          <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
          <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
          <p><strong>Estado:</strong> {{ endereco.uf }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importando helpers do Vuex para mapear estado e ações
import { mapState, mapActions } from 'vuex';

export default {
  // Nome do componente para depuração
  name: 'SearchView',
  
  // Dados locais do componente
  data() {
    return {
      cep: '' // Campo para armazenar o CEP digitado
    }
  },
  
  // Propriedades computadas
  computed: {
    // Mapeando estado do Vuex
    ...mapState({
      endereco: state => state.cepData,  // Dados do endereço
      error: state => state.error        // Mensagem de erro
    }),
    
    // Validação do formato do CEP
    isValidCep() {
      const cepNumbers = this.cep.replace(/\D/g, '');
      return cepNumbers.length === 8;
    }
  },
  
  // Métodos do componente
  methods: {
    // Mapeando ações do Vuex
    ...mapActions(['fetchCep']),
    
    // Formata o CEP enquanto o usuário digita
    formatCep() {
      let value = this.cep.replace(/\D/g, '');          // Remove caracteres não numéricos
      if (value.length > 8) value = value.slice(0, 8);  // Limita a 8 dígitos
      if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5); // Adiciona hífen após 5º dígito
      }
      this.cep = value;
    },
    
    // Realiza a busca do CEP
    async buscarCep() {
      if (!this.isValidCep) {
        return;
      }
      const cepNumbers = this.cep.replace(/\D/g, '');
      await this.fetchCep(cepNumbers);
    }
  }
}
</script>

<style scoped>
/* Container principal da página de busca */
.search {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

/* Estilo do botão Voltar */
.back-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #666;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 2rem;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #555;
}

/* Container do formulário de busca */
.search-container {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Grupo de input e botão */
.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Estilo do campo de entrada */
input {
  flex: 1;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4CAF50;
  outline: none;
}

/* Estilo do botão de busca */
button {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Estilo da mensagem de erro */
.error-message {
  color: #dc3545;
  margin: 1rem 0;
  padding: 0.5rem;
  background-color: #fff;
  border-left: 4px solid #dc3545;
}

/* Container do resultado */
.result {
  margin-top: 2rem;
}

/* Estilo das informações do endereço */
.address-info {
  background-color: white;
  padding: 1.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.address-info p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

/* Estilo do título do resultado */
h2 {
  color: #333;
  margin-bottom: 1rem;
}
</style>
