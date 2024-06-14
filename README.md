# Gestão de produtos e autenticação - API

## Introdução

Este projeto implementa uma API para uma loja de itens medievais, utilizando TypeScript e Sequelize. A aplicação inclui endpoints para cadastro, listagem e autenticação, além de testes para garantir a qualidade do código.

## Funcionalidades

### Cadastro de Produtos

- Endpoint: POST /products

- Descrição: Permite cadastrar novos produtos na loja.

### Listagem de Produtos

- Endpoint: GET /products

- Descrição: Retorna todos os produtos cadastrados na loja.

### Listagem de Usuários

- Endpoint: GET /users

- Descrição: Retorna todos os usuários, com os produtos associados a cada um.

### Login de Usuários

- Endpoint: POST /login

- Descrição: Permite o login de usuários, gerando um token JWT.

## Testes

- A aplicação inclui testes para garantir a funcionalidade e a segurança dos endpoints.

- A cobertura de testes atende aos padrões definidos para cada camada da aplicação.
