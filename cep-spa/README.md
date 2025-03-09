# Consulta de CEP - Aplicação Vue.js

Esta é uma aplicação Single Page Application (SPA) desenvolvida em Vue.js que permite aos usuários consultar endereços através de CEP. A aplicação oferece uma interface amigável e moderna para busca e visualização de informações de endereços.

## Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Vue Router 4** - Roteamento oficial do Vue.js
- **Vuex 4** - Gerenciamento de estado centralizado
- **Axios** - Cliente HTTP para requisições à API
- **Vite** - Build tool e servidor de desenvolvimento
- **Node.js** - Ambiente de execução JavaScript

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js (versão 14.x ou superior)
- NPM (Node Package Manager) ou Yarn

## Instalação

Siga estes passos para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd cep-spa
```

2. Configure as variáveis de ambiente:
```bash
# Copie o arquivo de exemplo de variáveis de ambiente
cp .env.example .env

# Edite o arquivo .env com suas configurações
# VITE_API_BASE_URL=http://127.0.0.1:8000/api
# VITE_DEV_SERVER_PORT=5173
# VITE_DEV_SERVER_HOST=localhost
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse a aplicação:
Abra seu navegador e acesse `http://localhost:5173` (ou a porta configurada no arquivo .env)

## Funcionalidades

- **Página Inicial**
  - Apresentação da aplicação
  - Navegação intuitiva
  - Design responsivo

- **Consulta de CEP**
  - Busca de endereços por CEP
  - Formatação automática do CEP
  - Validação de entrada
  - Exibição clara dos resultados

## Estrutura do Projeto

```
cep-spa/
├── src/
│   ├── assets/         # Arquivos estáticos (imagens, etc)
│   ├── components/     # Componentes Vue reutilizáveis
│   ├── router/         # Configuração das rotas
│   ├── store/          # Gerenciamento de estado (Vuex)
│   ├── views/          # Componentes de página
│   ├── App.vue         # Componente raiz
│   └── main.js         # Ponto de entrada da aplicação
├── public/             # Arquivos públicos
├── .env.example        # Exemplo de configuração de ambiente
├── LICENSE             # Licença do projeto
└── package.json        # Dependências e scripts
```

## Build para Produção

Para gerar a versão de produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos serão gerados na pasta `dist/`

## API de CEP

A aplicação utiliza a API local para consulta de CEPs. Configure a URL base da API no arquivo `.env`:
```
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

## Uso

1. Acesse a página inicial
2. Clique no botão "Consultar CEP"
3. Digite um CEP válido no formato 00000-000
4. Clique em "Buscar" para ver os resultados

## Configuração Adicional

Para configurar a porta e host do servidor de desenvolvimento, edite as variáveis no arquivo `.env`:
```bash
VITE_DEV_SERVER_PORT=5173
VITE_DEV_SERVER_HOST=localhost
```

Ou inicie o servidor com uma porta específica:
```bash
npm run dev -- --port [NÚMERO_DA_PORTA]
```

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Melhorias Futuras

- [ ] Adicionar histórico de buscas
- [ ] Implementar busca reversa (por endereço)
- [ ] Adicionar mapa para visualização do endereço
- [ ] Implementar testes automatizados
- [ ] Adicionar modo offline
