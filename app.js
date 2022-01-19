const express = require("express");
const app = express();
const cors = require("cors");

app.use((cors()));
app.use((express.json()));

app.get('/',(request,response) => {
    response.send("Welcone to the budgeting app")
})


app.get((request,response) => {
    response.status(404)
    .json({error:'Page not found'})
})

module.exports = app;