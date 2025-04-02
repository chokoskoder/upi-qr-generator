const express = require("express");
const dotenv = require("dotenv");
const paymentGateway = require("../src/routes/payments.js");

dotenv.config();

const app = express();

app.use(express.json);


app.listen(PORT , ()=>{
    console.log(`app is listening in ${PORT}`)
})
//now here will be the routes to show the items and forward the upi link generated 
