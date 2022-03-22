

# Boas vindas ao repositório do projeto Trybesmith!


# Habilidades

Neste projeto, foram abordadas as seguintes habilidades:

- Declarar variáveis e funções com tipagens _Typescript_;

- Construir uma _API Node Express_ utilizando o _Typescript_.



## O que foi desenvolvido

Neste projeto, foi desenvolvido um **CRUD** (_Create, Read, Update_ e _Delete_) de itens medievais, no formato de uma _API_, utilizando _Typescript_.
Foram criados alguns _endpoints_ para ler e escrever em um banco de dados, utilizando o **MySQL**.

---

## Desenvolvimento

Foram desenvolvidas as camadas da aplicação (_Models_, _Service_ e _Controllers_) no código e, por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão.



## Endpoints do Projeto

### 1 - cadastro de pessoas usuárias

- O endpoint é acessado através do caminho (`/users`);

- As informações de pessoas usuárias cadastradas são salvas na tabela `Users` do banco de dados;

- Um token `JWT` é gerado e retornado caso haja sucesso no _cadastro_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint recebe a seguinte estrutura:
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
---

### 2 -login de pessoas usuárias

- O endpoint é acessado através do caminho (`/login`).

- A rota recebe os campos `username` e `password`, e esses campos são validados no banco de dados.

- Um token `JWT` é gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```

### 3 - cadastro de produtos

- O endpoint é acessível através do caminho (`/products`).

- Um produto só é criado caso a pessoa usuária esteja _logada_ e o _token_ `JWT` validado.

- Os produtos enviados são salvos na tabela `Products` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

### 4 - listagem de produtos

- O endpoint é acessível através do caminho (`/products`);

- A rota é acessada apenas por pessoas logadas e com token `JWT` válido;



### 5 - cadastro de um pedido

- O endpoint é acessível através do caminho (`/orders`).

- Um pedido só é criado caso a pessoa usuária esteja logada e o token `JWT` validado.

- Os pedidos enviados são salvos na tabela `Orders` do banco de dados. A tabela `Products` também é alterada;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "products": [1, 2]
  }
```

### 6 - consultar um pedido

- O endpoint é acessível através do caminho (`/orders/:id`);

- O pedido só é acessado caso uma pessoa usuária esteja logada e o token `JWT` validado;

- É necessário passar o `id` correspondente ao pedido na rota;


### 7 -listar todos os pedidos

- O endpoint é acessível através do caminho (`/orders`).

- A lista só é acessada caso a pessoa usuária esteja logada e o token `JWT` validado.


