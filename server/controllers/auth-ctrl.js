const express = require("express");

const authLogic = require("../business-logic/auth-logic");
const router = express.Router();

// GET http://localhost:3000/api/users
router.get("/users", async (request, response) => {
  try {
    const users = await authLogic.getAllUsersAsync();
    response.json(users);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET http://localhost:3000/api/users/1
router.get("/users/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const user = await authLogic.getOneUserAsync(id);
    response.json(user);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// Sign-up: http://localhost:3003/api/auth/register

router.post("/register", async (request, response) => {
  try {
    const user = request.body;
    const addedUser = await authLogic.addUserAsync(user);
    response.status(201).json(addedUser);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// Log-in: http://localhost:3003/api/auth/login
router.post("/login", async (request, response) => {
  try {
    // Check in database if user exist:
    const username = request.body.username;
    const password = request.body.password;

    const user = await authLogic.isUserExist(username, password);
    // || user.length == 0
    // if (!user || !password || !username) {
    //   request.session.isLoggedIn = false;
    //   response.status(403).send("Incorrect username or password");
    //   return;
    // }

    // Save in the session that user is logged in, and user's role:
    request.session.isLoggedIn = true;
    request.session.role = user.isAdmin ? "Admin" : "User";

    response.json(user);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// Log-out:
router.post("/logout", (request, response) => {
  try {
    request.session.destroy();
    response.send();
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
