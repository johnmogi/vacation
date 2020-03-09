const express = require("express");
const expressSession = require("express-session");
const authController = require("./controllers/auth-ctrl");
const cors = require("cors");
const vacsController = require("./controllers/vac-ctrl");
const server = express();
server.use(
  expressSession({
    name: "authenticationCookie",
    secret: "I-Want-Pina-Colada",
    resave: true,
    saveUninitialized: false
  })
);

server.use(cors());
server.use(express.json());
server.use("/api", vacsController);
server.use("/api/auth", authController);
server.listen(3003, () =>
  console.log("Listening to Vacations on http://localhost:3003")
);
