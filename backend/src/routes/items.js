const express = require("express");
const router = express.Router();
const dotenv = require('dotenv');
const { items } = require('../models/items');

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

router.get("/show" , async (req , res)=>{
    try{
        const all_items = await items.find();
        res.json(all_items);
    }
    catch(err){
        res.status(400).json({message : "an error occured please check the console"});
    }
})



module.exports =  router 

