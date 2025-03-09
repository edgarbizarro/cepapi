# Contribuindo para o CEP API

Agradecemos seu interesse em contribuir com o CEP API! Este documento fornece as diretrizes para contribuir com o projeto.

## Processo de Contribuição

1. Faça um fork do projeto
2. Clone seu fork: `git clone [URL_DO_SEU_FORK]`
3. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
4. Faça suas alterações seguindo as convenções de código
5. Execute os testes: `composer test`
6. Formate o código: `composer format`
7. Commit suas mudanças: `git commit -m 'Descrição clara da alteração'`
8. Push para a branch: `git push origin feature/nome-da-feature`
9. Abra um Pull Request

## Convenções de Código

- Siga o PSR-12 para estilo de código
- Use tipagem forte sempre que possível
- Documente todas as classes e métodos públicos
- Mantenha 100% de cobertura de testes

## Testes

- Escreva testes para todas as novas funcionalidades
- Execute `composer test` antes de submeter um PR
- Mantenha os testes existentes passando

## Documentação

- Atualize a documentação para refletir suas mudanças
- Documente novos endpoints na seção API do README.md
- Mantenha os exemplos de código atualizados

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
composer install
```

2. Configure o ambiente:
```bash
cp .env.example .env
php artisan key:generate
```

3. Configure o banco de dados no .env

4. Execute as migrações:
```bash
php artisan migrate
```

5. Inicie o servidor:
```bash
php artisan serve
```

## Dúvidas?

Se tiver dúvidas sobre o processo de contribuição, abra uma issue com a tag "question".
