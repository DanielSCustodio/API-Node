# API REST/RESTful com  Express

## CONTEXTO
API com operações de CRUD na rota ```http://localhost:3008/user.```<br>
Nesse projeto foi utilizado o padrão de arquitetura MSC. Se trata de uma aplicação ```Node``` com o uso de ```Express``` para a construção das rotas.<br>
Para validação dos dados de entrada foi utilizado o ```Joi```.<br>
Para realização de testes foram utilizados ```Chai``` e ```Jest```


### Para executar esta aplicação:
- `npm install` or `yarn`
- `npm run dev` or `yarn dev`

### Para executar os testes:
- `npm test`

### Rota
- `http://localhost:3008/user`

<br><br>

## OPERAÇÕES
### Criar um usuário
`POST` `http://localhost:3008/user`<br>
Corpo da requisição <br>
```
  {
    "name": "Lua cheia",
    "email": "luas@dc.com",
    "password": "123456",
    "nickname": "luas"
  }
```
Caso os requisitos abaixo não estejam em conformidade, retornará o `status code` e a `mensagem de erro`, ambos de acordo com cada situação.
- Não é possível criar usuário com o mesmo email ou nickname
- Todos os campos são obrigatórios
- ``name`` deve ter no mínimo 5 caracteres
- ``email`` e ``password`` devem ter no mínimo 6 caracteres
- ``nickname`` deve ter no mínimo 3 caracteres


