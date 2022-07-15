module.exports = [
  {
    status: 400,
    messageReceived: '"name" is not allowed to be empty',
    message: '"name" is required'
  },

  {
    status: 400,
    messageReceived: '"name" is required',
    message: '"name" is required'
  },
  {
    status: 422,
    messageReceived: '"name" length must be at least 5 characters long',
    message: '"name" length must be at least 5 characters long'
  },

  {
    status: 400,
    messageReceived: '"email" is not allowed to be empty',
    message: '"email" is required'
  },

  {
    status: 400,
    messageReceived: '"email" is required',
    message: '"email" is required'
  },
  {
    status: 422,
    messageReceived: '"email" length must be at least 6 characters long',
    message: '"email" length must be at least 6 characters long'
  },

  {
    status: 400,
    messageReceived: '"password" is not allowed to be empty',
    message: '"password" is required'
  },

  {
    status: 400,
    messageReceived: '"password" is required',
    message: '"password" is required'
  },
  {
    status: 422,
    messageReceived: '"password" length must be at least 6 characters long',
    message: '"password" length must be at least 6 characters long'
  },

  {
    status: 400,
    messageReceived: '"nickname" is not allowed to be empty',
    message: '"nickname" is required'
  },

  {
    status: 400,
    messageReceived: '"nickname" is required',
    message: '"nickname" is required'
  },
  {
    status: 422,
    messageReceived: '"nickname" length must be at least 3 characters long',
    message: '"nickname" length must be at least 3 characters long'
  },

  {
    status: 403,
    messageReceived: "User already exists",
    message: "User already exists"
  },

  {
    status: 404,
    messageReceived: "User not found",
    message: "User not found"
  }
];
