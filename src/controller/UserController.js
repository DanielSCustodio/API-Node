const userService = require("../service/userService");

const create = async (req, res) => {
  const newUser = await userService.create(req.body);
  return res.status(201).json(newUser);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  return res.status(200).json(user);
};

const update = async (req, res) => {
  const { id } = req.params;
  const user = await userService.update(id, req.body);
  return res.status(200).json(user);
};

const remove = async (req, res) => {
  const { id } = req.params;
  await userService.remove(id);
  return res.status(204).end();
};

module.exports = {
  create,
  getById,
  update,
  remove
};
