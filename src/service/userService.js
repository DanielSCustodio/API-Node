const userModel = require("../model/userModel");

const create = async (body) => {
  const newUser = await userModel.create(body);
  return newUser;
};

const getById = async (id) => {
  const user = await userModel.getById(id);
  return user;
};

const update = async (id, body) => {
  const user = await userModel.update(id, body);
  return user;
};

const remove = async (id) => {
  const user = await userModel.remove(id);
  return user;
};

module.exports = {
  create,
  getById,
  update,
  remove
};
