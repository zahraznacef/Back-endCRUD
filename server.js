const express = require('express'); // import express
const app = express(); // run express
const db = require("./config/db"); // import database
db(); // run database

const cors = require("cors")
app.use(cors())
app.use(express.json())

const user = require("./Routes/useRoutes")
app.use("/shop",user)

app.listen(4000,() =>{
    console.log("server on");
})