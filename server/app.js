const express = require("express");
const cors = require("cors");
const vacsController = require("./ctrl");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api", vacsController);
server.listen(3003, () =>
  console.log("Listening to Vacations on http://localhost:3003")
);
