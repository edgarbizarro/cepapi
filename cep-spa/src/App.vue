<!-- 
  App.vue - Componente raiz da aplicação
  Este é o componente principal que serve como container para toda a aplicação.
  O router-view renderiza os componentes com base na rota atual.
-->
<template>
  <div id="app">
    <!-- Router View - Área onde os componentes das rotas serão renderizados -->
    <router-view />
  </div>
</template>

<style>
/* Estilos globais da aplicação */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Garante que padding não afete o tamanho total */
}

/* Estilos básicos para o corpo da página */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f0f2f5; /* Cor de fundo suave */
  color: #333;
}

/* Container principal da aplicação */
#app {
  min-height: 100vh; /* Garante altura mínima de 100% da viewport */
}
</style>
