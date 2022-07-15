const { validationSchema } = require("../util/validationSchema");
const { sendResponse } = require("../util/responseError");
const readFile = require("../model/readFile");

const checkBody = async (req, res, next) => {
  try {
    await validationSchema.validateAsync(req.body);
  } catch (error) {
    const err = error.details[0];
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

const checkData = async (req, res, next) => {
  const { nickname, email } = req.body;
  const listUsers = await readFile();
  let result = listUsers.some(
    ({ nickname: n, email: e }) => n === nickname || e === email
  );

  if (result) {
    const { status, message } = await sendResponse("User already exists");
    return res.status(status).json({ message });
  }
  next();
};

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const listUser = await readFile();
  const result = listUser.findIndex((user) => user.id === +id);
  if (result === -1) {
    const { status, message } = await sendResponse("User not found");
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  checkBody,
  checkData,
  checkId
};
