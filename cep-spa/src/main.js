// Importando os módulos necessários do Vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Criando a instância do aplicativo Vue
const app = createApp(App)

// Registrando os plugins (router e store)
app.use(router)    // Adiciona o Vue Router para navegação
app.use(store)     // Adiciona o Vuex para gerenciamento de estado

// Montando o aplicativo no elemento com id 'app'
app.mount('#app')
