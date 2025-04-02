const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName : {
        type : String,
        require : true,
    },
    itemValue : {
        type : Number , 
        require : true,
    },
    itemQuantity : { 
        type : Number,
        require : true
    }, 
    itemId : {
        type : Number , 
        require : true
    }

})

const items = mongoose.model("items" , itemSchema)

module.exports = {
    items
}