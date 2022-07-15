const user = require("express").Router();
const uservalidation = require("../middleware/userValidation");
const userController = require("../controller/UserController");

user.delete("/:id",
  uservalidation.checkId,
  userController.remove);
user.get("/:id",
  uservalidation.checkId,
  userController.getById);
user.put(
  "/:id",
  uservalidation.checkId,
  uservalidation.checkData,
  uservalidation.checkBody,
  userController.update
);
user.post(
  "/",
  uservalidation.checkData,
  uservalidation.checkBody,
  userController.create
);

module.exports = user;
