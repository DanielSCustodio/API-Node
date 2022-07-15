const joi = require("@hapi/joi");

const validationSchema = joi.object({
  name: joi.string().min(5).required(),
  email: joi.string().min(6).required(),
  password: joi.string().min(6).required(),
  nickname: joi.string().min(3).required()
});

module.exports = {
  validationSchema
};
