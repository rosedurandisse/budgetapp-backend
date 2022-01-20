const { request } = require("express");
const express = require("express");
const transactionArray = require("../models/transactionPlacebo");
const transactions = express.Router();

//get the page route /transactions results in the array
transactions.get("/", (request, response) => {
  console.log("This is the home page showing the array");
  response.send(transactionArray);
});

//destructing index so necessary to put in
transactions.get("/:index", (request, response) => {
  const { index } = request.params;
  console.log("Get an index");
  transactionArray[index]
    ? response.json(transactionArray[index])
    : response.redirect("/transactions", 302);
});

transactions.delete("/:index", (request, response) => {
  const { index } = request.params;
  transactionArray.splice(index, 1);
  response.json(transactionArray);
});

transactions.post("/", (request, response) => {
  transactionArray.push(request.body);
  response.status(201).json(transactionArray);
});

transactions.put("/index", (request, response) => {
  const { index } = request.params;
  transactionArray[index] = request.body;
  response.status(201).json(transactionArray);
});
module.exports = transactions;
