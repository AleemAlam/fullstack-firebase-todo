const db = require("../config/db");
const Todos = db.collection("todos");
module.exports = Todos;
