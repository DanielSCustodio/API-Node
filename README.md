# API Node REST/RESTful com  Express

## CONTEXTO
API com operações de CRUD na rota ```http://localhost:3008/user```<br>
Nesse projeto foi utilizado o padrão de arquitetura MSC. Se trata de uma aplicação ```Node``` com o uso de ```Express``` para a construção das rotas.<br>
Para a validação dos dados de entrada foi utilizado  ```Joi```.<br>
Para a realização de testes foram utilizados ```Chai``` e ```Jest```


### Para executar esta aplicação:
- 1º `npm install` ou `yarn`
- 2º `npm run dev` ou `yarn dev`

### Para executar os testes:
- `npm test`

### Rota
- `http://localhost:3008/user`
<br>

## OPERAÇÕES DE CRUD
### :arrow_right: Criar um usuário
`POST` `http://localhost:3008/user`<br>
#### Corpo da requisição <br>
```
  {
    "name": "Lua cheia",
    "email": "luas@dc.com",
    "password": "123456",
    "nickname": "luas"
  }
```
#### Retorno da requisição:
![image](https://user-images.githubusercontent.com/29557187/182241483-2f0312d5-4710-49e1-ba30-36b394b472a2.png)

Caso os requisitos abaixo não estejam em conformidade, retornará o `status code` e a `mensagem de erro`, ambos de acordo com cada situação.
- Não é possível criar um usuário com ``email`` ou ``nickname`` já existentes no cadastro.
- Todos os campos são obrigatórios.
- ``name`` deve ter no mínimo 5 caracteres.
- ``email`` e ``password`` devem ter no mínimo 6 caracteres.
- ``nickname`` deve ter no mínimo 3 caracteres.

### :arrow_right: Buscar um usuário
`GET` `http://localhost:3008/user/id`<br>
#### Retorno da requisição:
![image](https://user-images.githubusercontent.com/29557187/182241277-cf92f37e-3491-409a-8e14-87caa0330489.png)

Caso o requisito abaixo não esteja em conformidade, retornará o `status code` e a `mensagem de erro`.
- o ```id``` deve existir.

### :arrow_right: Editar um usuário
`PUT` `http://localhost:3008/user/id`<br>
#### Corpo da requisição <br>
```
  {
    "name": "Lua cheia",
    "email": "lua@dc.com",
    "password": "123456",
    "nickname": "lua"
  }
```
#### Retorno da requisição:
![image](https://user-images.githubusercontent.com/29557187/182241957-19087e1a-71f3-4489-aa55-3e02fb630726.png)

Caso os requisitos abaixo não estejam em conformidade, retornará o `status code` e a `mensagem de erro`, ambos de acordo com cada situação.
- o ``id`` deve existir.
- Os campos ``email`` e ``nickname`` devem ser editados obrigatoriamente.
- ``name`` deve ter no mínimo 5 caracteres.
- ``email`` e ``password`` devem ter no mínimo 6 caracteres.
- ``nickname`` deve ter no mínimo 3 caracteres.

### :arrow_right: Deletar um usuário
`DELETE` `http://localhost:3008/user/id`<br>
#### Retorno da requisição:
![image](https://user-images.githubusercontent.com/29557187/182244045-5fc46521-db4e-4868-ab4b-193631f874b2.png)

Caso o requisito abaixo não esteja em conformidade, retornará o `status code` e a `mensagem de erro`.
- o ```id``` deve existir.





















