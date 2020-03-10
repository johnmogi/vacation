const dal = require("../dal");

async function getAllUsersAsync() {
  const sql = "SELECT * FROM users";
  const users = await dal.executeAsync(sql);
  return users;
}
async function getOneUserAsync(id) {
  const sql = `SELECT * FROM users WHERE userID = ${id}`;
  const user = await dal.executeAsync(sql);
  return user;
}
async function addUserAsync(user) {
  const sql = `INSERT INTO users ( firstName, lastName, userName, password, isAdmin) VALUES('${user.firstName}','${user.lastName}','${user.userName}','${user.password}',0)`;
  const info = await dal.executeAsync(sql);
  user.id = info.insertId;
  return user;
}
async function isUserExist(username, password) {
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  const user = await dal.executeAsync(sql);

  return user;
}

module.exports = {
  getAllUsersAsync,
  getOneUserAsync,
  addUserAsync,
  isUserExist
};
