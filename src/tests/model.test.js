const { expect } = require("chai");
const model = require("../model/userModel");
const readFile = require("../model/readFile");
const writeFile = require("../model/writeFile");


const mock = [
  {
    id: 900,
    name: "Lex Luthor",
    email: "lex@dc.com",
    password: "lexluthor123",
    nickname: "Lex L"
  },
  {
    id: 700,
    name: "Jack Bauer",
    email: "jb@ct.com",
    password: "hjkis2S",
    nickname: "Dans"
  },
  {
    id: 300,
    name: "Ash Ketchum",
    email: "ash@pokemon.com",
    password: "pikachu123",
    nickname: "Ash"
  }
];

describe("Camada Model", () => {


  describe("Função 'create'", () => {
    afterEach(async() =>{
    const listUsers = await readFile();
    const filter = listUsers.filter((element, index) => index < listUsers.length - 1);
    await writeFile(filter);
  }) ;
    it("O retorno é do tipo objeto", async () => {
      const result = await model.create(mock[0]);
      expect(result).to.be.an("object");
    });

    it('Existe a propriedade "id"', async () => {
      const result = await model.create(mock[1]);
      expect(result).to.haveOwnProperty("id");
    });

    it('A propriedade "id" é igual a 300', async () => {
      const result = await model.create(mock[2]);
      expect(result.id).to.be.equal(300);
    });
  });

  describe("Função 'getById'", () => {
    beforeEach(async ()=> {
      await model.create(mock[0])
    })

    afterEach(async() =>{
      const listUsers = await readFile();
      const filter = listUsers.filter((element, index) => index < listUsers.length - 1);
      await writeFile(filter);
    }) ;
    it("Retorna um objeto quando passado o id", async () => {
      const result = await model.getById(mock[0].id);
      expect(result).to.be.an("object");
    });

    it('O objeto contém as chaves "name", "email", "nickname"', async () => {
      const result = await model.getById(mock[0].id);
      expect(result).to.include.all.keys("name", "email", "nickname");
    });

    it('A propriedade "mame" é igual a "Lex Luthor"', async () => {
      const result = await model.getById(mock[0].id);
      expect(result.name).to.be.equal("Lex Luthor");
    });
  }); 

  describe("Função update", () => {
    beforeEach(async ()=> {
      await model.create(mock[0])
    })

    afterEach(async() =>{
      const listUsers = await readFile();
      const filter = listUsers.filter((element, index) => index < listUsers.length - 1);
      await writeFile(filter);
    }) ;
    it("O retorno é do tipo obejto", async () => {
      const result = await model.update(mock[0].id, mock[3]);
      expect(result).to.be.an("object");
    });

    it('O objeto contém as chaves "id", "name", "nickname","email","password"', async () => {
      const result = await model.update(mock[0].id, mock[2]);
      expect(result).to.include.all.keys(
        "id",
        "name",
        "nickname",
        "email",
        "password"
      );
    });
  });

  describe("Função remove", () => {
    it("Exclui o obejto que possui o id passado como parâmetro", async () => {
      await model.create(mock[0]);
      await model.remove(mock[0].id);
      expect(mock).not.contain(mock[0].id === 1);
    });
  });
});
