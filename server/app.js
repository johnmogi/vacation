const express = require("express");
const expressSession = require("express-session");
const authController = require("./controllers/auth-ctrl");
const cors = require("cors");
const vacsController = require("./controllers/vac-ctrl");

const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 3003;
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
server.listen(port, () =>
  console.log(`Server Vacations running on port ${port}`)
);
// server.listen(port, () =>
//   console.log("Listening to Vacations on http://localhost:3003")
// );
