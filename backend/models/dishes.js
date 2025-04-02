const mongoose = require("mongoose");
const dishesSchema = new mongoose.Schema({
      
    title:{
      type:String,
      required:true,
      trim:true
    },
    desc:{
        type:String,
        required:true,
        trim:true
      },

    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min :0 // cmimi nuk duhet te jete negativ
    }
});
const Dishes = mongoose.model("Dishes", dishesSchema);
module.exports = Dishes;