const mongoose=require("mongoose");
const itemSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String,
    },
    photo:{
        type:String,
    },
});

const Item = mongoose.modal("Item", itemSchema);
module.exports=Item;