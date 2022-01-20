const express = require('express');
const transactionArray = require('../models/transactionPlacebo');
const transactions = express.Router();


//get the page route /transactions results in the array
transactions.get('/', (request,response) => {
    console.log("This is the home page showing the array")
    response.send(transactionArray)
})

//
transactions.get('/:index', (request,response) => {
    const {index} = request.params;
    console.log("Get an index")
    if (transactionArray[index]) {
        response.json(transactionArray[index])
    }
})


module.exports = transactions;