const fs = require("fs").promises;

const writeFile = async (file) => {
  const user = await fs.writeFile("./listUsers.json", JSON.stringify(file));
  return user;
};

module.exports = writeFile;
