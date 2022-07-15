const fs = require("fs").promises;

const readFile = async () => {
  const listUsers = await fs
    .readFile("./listUsers.json", "utf-8")
    .then((response) => JSON.parse(response));
  return listUsers;
};

module.exports = readFile;
