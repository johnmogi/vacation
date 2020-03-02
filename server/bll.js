const dal = require("./dal");

async function getAllVacsAsync() {
  const sql = "SELECT * FROM vacations";
  const vacs = await dal.executeAsync(sql);
  return vacs;
}
async function getOneVacAsync(id) {
  const sql = `SELECT * FROM vacations WHERE vacationID = ${id}`;
  const user = await dal.executeAsync(sql);
  return user;
}
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
module.exports = {
  getAllVacsAsync,
  getOneVacAsync,
  getAllUsersAsync,
  getOneUserAsync
};
