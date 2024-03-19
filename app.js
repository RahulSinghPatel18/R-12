require("dotenv").config({path:"./.env"});
const userRouter = require('./routes/userRoute')
const express = require("express");
const { models } = require("mongoose");
const app = express();

// const dotenv = require("dotenv");
// dotenv.config({path: "./.env"});

// const PORT = process.env.PORT;

// routes
const router = require("./routes/userRoute");

// logger
app.use(require("morgan")('tiny'));


// body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', userRouter);

app.all('*', (req,res,next)=>{
    res.status(404).json({
        success : false,
        message :`${req.url} route not found`,
    })
})

require('./models/dbconfig').dbconnection()


app.listen(process.env.PORT, () =>{
    console.log(`The Server is running on port ${process.env.PORT   }`);
});