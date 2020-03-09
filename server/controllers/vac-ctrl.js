const express = require("express");
const vacsLogic = require("../business-logic/bl-logic");
const router = express.Router();
// GET http://localhost:3000/api/vacations
// if user isn't logged in- deny the service
router.get("/vacations", async (request, response) => {
  try {
    if (!request.session.isLoggedIn) {
      response.status(403).send("Access Denied! Please Log-In!");
      return;
    }

    const vacs = await vacsLogic.getAllVacsAsync();
    response.json(vacs);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET http://localhost:3000/api/vacations/1
router.get("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = await vacsLogic.getOneVacAsync(id);
    response.json(vac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET http://localhost:3000/api/users
router.get("/users", async (request, response) => {
  try {
    const users = await vacsLogic.getAllUsersAsync();
    response.json(users);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// GET http://localhost:3000/api/users/1
router.get("/users/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const user = await vacsLogic.getOneUserAsync(id);
    response.json(user);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST http://localhost:3000/api/users
router.post("/users", async (request, response) => {
  try {
    const user = request.body;
    const addedUser = await vacsLogic.addUserAsync(user);
    response.status(201).json(addedUser);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST http://localhost:3000/api/vacations
router.post("/vacations", async (request, response) => {
  try {
    const vac = request.body;
    const addedVac = await vacsLogic.addVacAsync(vac);
    response.status(201).json(addedVac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// updateFullVacationAsync
// update
// PUT http://localhost:3000/api/vacation/7

router.put("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = request.body;
    vac.id = id;
    const updatedVacation = await vacsLogic.updateFullVacationAsync(vac);

    if (updatedVacation === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedVacation);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PATCH http://localhost:3000/api/products/7
router.patch("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    const vac = request.body;
    vac.id = id;
    const updatedVac = await vacsLogic.updatePartialVacAsync(vac);

    if (updatedVac === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedVac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
// DELETE http://localhost:3000/api/vacations/1
router.delete("/vacations/:id", async (request, response) => {
  try {
    const id = +request.params.id;
    await vacsLogic.deleteOneVacAsync(id);
    response.sendStatus(204);
    // response.json(vac);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
