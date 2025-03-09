<!-- 
  HomeView.vue - Página inicial da aplicação
  Esta é a página de boas-vindas que apresenta uma breve descrição do serviço
  e fornece um botão para navegar até a página de consulta de CEP.
-->
<template>
  <div class="home">
    <!-- Título principal -->
    <h1>Bem-vindo ao Consultor de CEP</h1>
    
    <div class="content">
      <!-- Imagem ilustrativa de localização -->
      <img src="../assets/location.svg" alt="Localização" class="home-image">
      
      <!-- Texto descritivo do serviço -->
      <p class="description">
        Bem-vindo ao nosso sistema de consulta de CEP! 
        Esta ferramenta permite que você encontre facilmente endereços 
        completos a partir de um CEP. Clique no botão abaixo para começar.
      </p>
      
      <!-- Botão de navegação para a página de busca -->
      <router-link to="/buscar" class="search-button">
        Consultar CEP
      </router-link>
    </div>
    
    <!-- Container para busca de CEP -->
    <div class="search-container">
      <!-- Campo de entrada para o CEP -->
      <input type="text" v-model="cep" placeholder="Digite o CEP" maxlength="8">
      
      <!-- Botão para buscar o CEP -->
      <button @click="buscarCep">Buscar</button>
    </div>
    
    <!-- Container para exibir o resultado da busca -->
    <div v-if="endereco" class="result">
      <!-- Título do resultado -->
      <h2>Resultado:</h2>
      
      <!-- Dados do endereço -->
      <p><strong>Logradouro:</strong> {{ endereco.logradouro }}</p>
      <p><strong>Bairro:</strong> {{ endereco.bairro }}</p>
      <p><strong>Cidade:</strong> {{ endereco.localidade }}</p>
      <p><strong>Estado:</strong> {{ endereco.uf }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // Nome do componente para depuração
  name: 'HomeView',
  
  // Dados do componente
  data() {
    return {
      cep: '', // CEP digitado pelo usuário
      endereco: null // Dados do endereço encontrado
    }
  },
  
  // Métodos do componente
  methods: {
    // Busca o CEP e exibe o resultado
    async buscarCep() {
      try {
        // Requisição para a API de CEP
        const response = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
        
        // Atualiza os dados do endereço
        this.endereco = response.data;
      } catch (error) {
        // Trata o erro
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao buscar CEP. Verifique se o CEP está correto.');
      }
    }
  }
}
</script>

<style scoped>
/* Container principal da página inicial */
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

/* Container do conteúdo principal */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; /* Espaçamento entre elementos */
}

/* Estilo da imagem de localização */
.home-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

/* Estilo do texto descritivo */
.description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  max-width: 600px;
}

/* Estilo do botão de busca */
.search-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

/* Efeito hover no botão */
.search-button:hover {
  background-color: #45a049;
}

/* Container para busca de CEP */
.search-container {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

/* Campo de entrada para o CEP */
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
}

/* Botão para buscar o CEP */
button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Efeito hover no botão */
button:hover {
  background-color: #45a049;
}

/* Container para exibir o resultado da busca */
.result {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
