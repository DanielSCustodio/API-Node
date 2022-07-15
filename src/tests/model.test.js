const { expect } = require("chai");
const model = require("../model/userModel");

const mock = [
  {
    id: 1,
    name: "Lanterna Verde",
    email: "lanternas@dc.com",
    password: "#123Ghj",
    nickname: "John"
  },
  {
    id: 2,
    name: "Jack Bauer",
    email: "jb@ct.com",
    password: "hjkis2S",
    nickname: "Dans"
  },
  {
    id: 3,
    name: "Ash Ketchum",
    email: "ash@pokemon.com",
    password: "pikachu123",
    nickname: "Ash"
  }
];

describe("Camada Model", () => {
  describe("Função 'create'", () => {
    it("O retorno é do tipo objeto", async () => {
      const result = await model.create(mock[0]);
      expect(result).to.be.an("object");
    });

    it('Existe a propriedade "id"', async () => {
      const result = await model.create(mock[0].id);
      expect(result).to.haveOwnProperty("id");
    });

    it('A propriedade "id" é igual a 1', async () => {
      const result = await model.create(mock[0]);
      expect(result.id).to.be.equal(1);
    });
  });

  describe("Função 'getById'", () => {
    it("Retorna um objeto quando passado o id", async () => {
      const result = await model.getById(mock[0].id);
      expect(result).to.be.an("object");
    });

    it('O objeto contém as chaves "name", "email", "nickname"', async () => {
      const result = await model.getById(mock[0].id);
      expect(result).to.include.all.keys("name", "email", "nickname");
    });

    it('A propriedade "id" é igual a 1', async () => {
      const result = await model.create(mock[0]);
      expect(result.id).to.be.equal(1);
    });
  });

  describe("Função update", () => {
    it("O retorno é do tipo obejto", async () => {
      const result = await model.update(mock[0].id, mock[2]);
      expect(result).to.be.an("object");
    });

    it('O objeto contém as chaves "id", "name", "nickname","email","passwprd"', async () => {
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
      await model.remove(mock[0].id);
      expect(mock).not.contain(mock[0].id === 1);
    });
  });
});
