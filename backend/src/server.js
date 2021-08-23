const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const todoController = require("./controllers/todo.controller");

app.use("/api/todo", todoController);

app.listen(3300, () => {
  console.log("Port is listening on 3300");
});
