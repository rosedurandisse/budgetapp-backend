const express = require("express");
const app = express();
const cors = require("cors");

const budgetingControllers = require("./controllers/budgetingControllers");

app.use(express.json());
app.use(cors());
app.use("/transactions", budgetingControllers);

app.get("/", (request, response) => {
  response.send("Welcome to the budgeting app");
});

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
