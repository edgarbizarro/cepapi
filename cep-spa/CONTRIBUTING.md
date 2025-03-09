# Contribuindo para o CEP SPA

Agradecemos seu interesse em contribuir com o CEP SPA! Este documento fornece as diretrizes para contribuir com o projeto.

## Processo de Contribuição

1. Faça um fork do projeto
2. Clone seu fork: `git clone [URL_DO_SEU_FORK]`
3. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
4. Instale as dependências: `npm install`
5. Faça suas alterações seguindo as convenções de código
6. Execute os testes: `npm run test`
7. Formate o código: `npm run format`
8. Commit suas mudanças: `git commit -m 'Descrição clara da alteração'`
9. Push para a branch: `git push origin feature/nome-da-feature`
10. Abra um Pull Request

## Convenções de Código

- Use a Style Guide do Vue.js
- Mantenha componentes pequenos e focados
- Use composables para lógica reutilizável
- Documente props e eventos
- Siga o padrão de nomenclatura kebab-case para arquivos
- Use PascalCase para nomes de componentes

## Estrutura de Arquivos

```
src/
├── assets/      # Recursos estáticos
├── components/  # Componentes reutilizáveis
├── router/      # Configuração de rotas
├── store/       # Store Vuex
└── views/       # Componentes de página
```

## Testes

- Escreva testes para todos os componentes
- Teste interações do usuário
- Mantenha os testes existentes passando
- Use mocks para chamadas de API

## Documentação

- Atualize a documentação para refletir suas mudanças
- Documente novos componentes
- Mantenha os exemplos atualizados
- Atualize o README.md quando necessário

## Commits

- Use mensagens de commit claras e descritivas
- Siga o padrão: `tipo: descrição curta`
- Tipos: feat, fix, docs, style, refactor, test, chore

## Pull Requests

- Descreva claramente o propósito do PR
- Referencie issues relacionadas
- Inclua screenshots para mudanças visuais
- Certifique-se que todos os testes passam

## Reportando Issues

- Use o template de issue apropriado
- Forneça passos para reproduzir bugs
- Inclua logs e screenshots relevantes
- Descreva o comportamento esperado

## Ambiente de Desenvolvimento

1. Instale as dependências:
```bash
npm install
```

2. Configure o ambiente:
```bash
cp .env.example .env
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o aplicativo:
```
http://localhost:5173
```

## Estilo e Formatação

- Use ESLint para linting
- Use Prettier para formatação
- Execute `npm run lint` antes de commits
- Configure seu editor para formatar ao salvar

## Dúvidas?

Se tiver dúvidas sobre o processo de contribuição, abra uma issue com a tag "question".
