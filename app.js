require("dotenv").config({path:"./.env"});

const express = require("express");
const app = express();

// const dotenv = require("dotenv");
// dotenv.config({path: "./.env"});

// const PORT = process.env.PORT;


app.listen(process.env.PORT, () =>{
    console.log(`The Server is running on port ${process.env.PORT   }`);
});