const dal = require("../dal");

async function isUserExist(username, password) {
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  const user = await dal.executeAsync(sql);

  return user;
}

module.exports = {
  isUserExist
};
