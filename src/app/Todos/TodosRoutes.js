const express = require("express");
const TodosRoutes = express.Router();
const TodosController = require("./TodosController.js");

TodosRoutes.get("/", TodosController);

module.exports = TodosRoutes;