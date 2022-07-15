const readFile = require("./readFile");
const writeFile = require("./writeFile");

const create = async (body) => {
  const listUsers = await readFile();
  const newUser = {
    id: listUsers.length + 1,
    ...body
  };
  listUsers.push(newUser);
  await writeFile(listUsers);
  return newUser;
};

const getById = async (id) => {
  const listUsers = await readFile();
  const { name, email, nickname } = listUsers.find((user) => user.id === +id);
  return { name, email, nickname };
};

const update = async (id, body) => {
  const listUsers = await readFile();
  const user = { id: +id, ...body };
  const findUser = listUsers.findIndex((user) => user.id === +id);
  listUsers[findUser] = { ...user };
  await writeFile(listUsers);
  return user;
};

const remove = async (id) => {
  const listUsers = await readFile();
  const findUser = listUsers.findIndex((user) => user.id === +id);
  listUsers.splice(findUser, 1);
  await writeFile(listUsers);
};

module.exports = { create, getById, update, remove };
