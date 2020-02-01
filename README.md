<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

## 🚀 Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `POST /projects/:id`: A rota deve mostar apenas o projeto com o `id` presente nos parâmetros da rota;

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

## 🌎 Executando a aplicação

Após clonar o repositório, acesse a pasta do projeto;

```
$ cd manage_projects
```

Em seguida, instale as dependências;

```
$ npm install
```

ou

```
$ yarn add
```

Assim que as dependências forrem instaladas, execute o comando;

```
$ npm run dev
```

ou

```
$ yarn dev
```

Utilize seu cliete de serviços preferido para acessar as rotas.

## 📡 Tarefas

- [x] Listar todos os projetos;
- [x] Buscar um determinado projeto;
- [x] Criar um projeto;
- [x] Editar o nome de um projeto;
- [x] Deletar um projeto;
- [x] Criar tarefas um projeto;
- [x] Adicionar middleware para verificar se o projeto existe;
- [x] Adicionar middleware global para contar as requisições que estão sendo feitas na aplicação;
