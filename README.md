# API de Consulta de CEP - Laravel

API RESTful desenvolvida em Laravel para consulta de endereços através de CEP, oferecendo endpoints para busca e validação de CEPs.

## Tecnologias Utilizadas

- **PHP 8.x** - Linguagem de programação
- **Laravel 10.x** - Framework PHP
- **MySQL** - Banco de dados
- **Composer** - Gerenciador de dependências PHP
- **Artisan** - CLI do Laravel
- **Sanctum** - Autenticação API
- **OpenAPI/Swagger** - Documentação da API

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- PHP 8.x
- Composer
- MySQL
- XAMPP, WAMP ou similar
- Git

## Instalação

Siga estes passos para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd cepapi
```

2. Configure as variáveis de ambiente:
```bash
# Copie o arquivo de exemplo de variáveis de ambiente
cp .env.example .env

# Edite o arquivo .env com suas configurações
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=cepapi
# DB_USERNAME=root
# DB_PASSWORD=
```

3. Instale as dependências:
```bash
composer install
```

4. Gere a chave da aplicação:
```bash
php artisan key:generate
```

5. Execute as migrações do banco de dados:
```bash
php artisan migrate
```

6. Inicie o servidor de desenvolvimento:
```bash
php artisan serve
```

7. Acesse a API:
A API estará disponível em `http://127.0.0.1:8000`

## Funcionalidades

- **Consulta de CEP**
  - Busca de endereços por CEP
  - Validação de formato de CEP
  - Cache de resultados para melhor performance
  - Tratamento de erros e respostas padronizadas

- **Autenticação**
  - Proteção de rotas com Laravel Sanctum
  - Geração de tokens de acesso
  - Controle de rate limiting

## Estrutura do Projeto

```
cepapi/
├── app/
│   ├── Http/
│   │   ├── Controllers/  # Controladores da aplicação
│   │   └── Middleware/   # Middlewares personalizados
│   ├── Models/           # Modelos do Eloquent
│   └── Services/         # Serviços da aplicação
├── config/              # Arquivos de configuração
├── database/
│   ├── migrations/      # Migrações do banco de dados
│   └── seeders/        # Seeders para dados iniciais
├── routes/
│   └── api.php         # Definição das rotas da API
├── tests/              # Testes automatizados
├── .env.example        # Exemplo de configuração de ambiente
├── composer.json       # Dependências do projeto
└── README.md          # Documentação
```

## Endpoints da API

### Consulta de CEP
```
GET /api/cep/{cep}
```
Retorna informações do endereço correspondente ao CEP informado.

**Parâmetros:**
- `cep` (string, required) - CEP no formato 00000000 ou 00000-000

**Exemplo de resposta:**
```json
{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "bairro": "Sé",
    "cidade": "São Paulo",
    "uf": "SP"
}
```

## Configuração do Banco de Dados

Configure as credenciais do banco de dados no arquivo `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cepapi
DB_USERNAME=root
DB_PASSWORD=
```

## Configuração Adicional

### Cache
Configure o driver de cache no arquivo `.env`:
```
CACHE_DRIVER=file
```

### Rate Limiting
Ajuste os limites de requisição em `app/Providers/RouteServiceProvider.php`

## Testes

Execute os testes automatizados:
```bash
php artisan test
```

Para testes específicos:
```bash
php artisan test --filter=CepControllerTest
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

- [ ] Implementar busca reversa por endereço
- [ ] Adicionar suporte a múltiplos provedores de CEP
- [ ] Implementar sistema de logs avançado
- [ ] Melhorar cache com Redis
- [ ] Adicionar mais testes de integração
- [ ] Implementar documentação com Swagger/OpenAPI
