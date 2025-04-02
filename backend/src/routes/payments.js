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

    // console.log("we are here atleast ");
    const id = Number(req.params.id);

    try{
        const item_info = await items.findOne({itemId : id}).lean();
        console.log(item_info);
        const upiId = process.env.UPI_ID;
        if(item_info){
            if(item_info.itemQuantity>0){
                //only then can we sell the item na 
                upiLink = `upi://pay?pa=${upiId}&am=${item_info.itemValue}&cu=INR&tn=${encodeURIComponent(item_info.itemName)}`;
                console.log(upiLink);
                res.json({upi_Link : upiLink});
                const updating = await items.updateOne(
                    { itemId: Number(id) }, 
                    { $inc: { itemQuantity: -1 } } // Decrease itemQuantity by 1
                );
            }
            else if(item_info.itemQuantity==0){
                res.send({message : "sorry no more of this message is left "})
            }
        }else{
            console.log ("not able to read ")
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
    



})// lets get the item and then send a simple sa upi link to the frontend 




module.exports = router;