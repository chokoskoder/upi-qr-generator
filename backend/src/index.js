const express = require("express");
const paymentGateway = require("../src/routes/payments.js");
const dotenv = require("dotenv");
const connectDB = require("./controller/dbcontroller.js")
const items = require("../src/routes/items.js");
dotenv.config();

const PORT = process.env.PORT

connectDB();


const app = express();

app.use(express.json());

app.use("/api" , paymentGateway);

app.use("/items" , items)


app.listen(PORT , ()=>{
    console.log(`app is listening in ${PORT}`)
})
//now here will be the routes to show the items and forward the upi link generated 
