const express = require("express");
const router = express.Router();
const dotenv = require('dotenv');
const { items } = require('../models/items');
const { Types } = require("mongoose");

dotenv.config();

router.post("/add" , async(req , res)=>{
    const {itemName ,  itemValue , itemQuantity , itemId} = req.body;

    try{
        const addItem = await items.create({
            itemId : itemId,
            itemName : itemName,
            itemValue : itemValue,
            itemQuantity : itemQuantity
        })
        res.status(200).json({message : "added "});
    }
    catch(error){
        console.log(error);
    }

})

router.get("/find/:id", async (req, res) => {
    const id = Number(req.params.id);

    try {
        const item_info = await items.findOne({ itemId: id }).lean();
        if (!item_info) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json({ item: item_info }); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
});



module.exports =  router 

