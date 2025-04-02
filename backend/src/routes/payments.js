// we will generate the qr code here 
//or do i take an input from the frontend and then move ahead 

// so the frontend will send back the items id and then i will create a qr using the given data 

const express = require('express');
const dotenv = require("dotenv")
const { items }= require("../models/items.js")

dotenv.config();

const router = express.Router();
console.log(process.env.UPI_ID);

router.post("/generate-qr/:id" , async(req , res)=>{
    const { id } = req.params;

    try{
        const item_info = await items.findOne({itemId : Number(id)});
    }
    catch(err){
        res.status(500).json(err)
    }
    
    const upiId = process.env.UPI_ID;
    if(item_info.itemQuantity>0){
        //only then can we sell the item na 
        upi_link = `upi://pay?pa=${upiId}&am=${item_info.itemValue}&cu=INR&tn=${encodeURIComponent(item_info.itemName)}`;
        res.send({upiLink : upi_link , item_name : item_info.itemName , amount : item_info.itemValue});
        const updating = await items.updateOne(
            { itemId: Number(id) }, 
            { $inc: { itemQuantity: -1 } } // Decrease itemQuantity by 1
        );
    }
    else if(item_info.itemQuantity==0){
        res.send({message : "sorry no more of this message is left "})
    }


})// lets get the item and then send a simple sa upi link to the frontend 




module,exports = router;