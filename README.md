<div align="center">

<img src="./images/nodejs-readme.png" alt="Node.js Logo" width="100" hight="100"/>

# chaos-nodejs.backend

Backend API construida com Node.js, Express e foco em boas praticas de observabilidade, logging estruturado e containerizacao segura.

</div>

## Arquitetura

O projeto segue uma arquitetura **MVC** (Model-View-Controller) adaptada para APIs REST, onde a camada de View e substituida pelas respostas JSON da API.

```
src/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── config/
├── utils/
├── o11y/
└── tests/
```

### Camadas

#### `src/routes/`
Define as rotas HTTP da API e conecta cada endpoint ao seu respectivo controller. Aqui nao deve existir logica de negocio, apenas o mapeamento de metodo + path para o controller correto.

#### `src/controllers/`
Recebe as requisicoes HTTP, extrai os dados necessarios (params, body, query) e delega o processamento para a camada de services. E responsavel por retornar a resposta HTTP adequada (status code, JSON).

#### `src/services/`
Contem toda a logica de negocio da aplicacao. E a camada que orquestra operacoes entre models, validacoes e regras de negocio. Nao deve conhecer detalhes de HTTP (request/response).

#### `src/models/`
Define os schemas Mongoose e entidades do MongoDB. Cada model representa uma colecao no banco de dados, com suas validacoes de schema, indexes e metodos auxiliares.

#### `src/middlewares/`
Middlewares customizados do Express, como autenticacao, validacao de entrada, tratamento global de erros e logging de requisicoes.

#### `src/config/`
Centralizacao das configuracoes da aplicacao: conexao com o banco de dados, variaveis de ambiente, e demais configuracoes que variam entre ambientes (dev, staging, prod).

#### `src/utils/`
Funcoes utilitarias reutilizaveis que nao pertencem a nenhuma camada especifica, como formatadores, helpers de data, geradores de token, etc.

#### `src/o11y/`
Camada de observabilidade, separada do codigo de negocio. Contem a configuracao do logger (Pino) e a instrumentacao OpenTelemetry para traces e metricas.

#### `src/tests/`
Testes automatizados da aplicacao utilizando Poku. A estrutura interna dos testes espelha a estrutura de `src/` para facilitar a navegacao.

### Fluxo de uma requisicao

```
Request → Route → Middleware → Controller → Service → Model → MongoDB
                                    ↓
Response ← Controller ← Service ←──┘
```
