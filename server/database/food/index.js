import Mongoose from "mongoose";

const FoodSchema= new Mongoose.Schema({
name:{type: String,required: true},
description:{type: String,required: true},
isVeg:{typre:Boolean,required: true},
isContainsEgg:{typre:Boolean,required: true},
category:{type:String, required:true},
photos:{
    type:mongoose.Types.ObjectId,
    ref: "Images",

},
price:{type: Number, default: 150, required: true},
addOns:[{
    type:mongoose.Types.ObjectId,
    ref: "Foods",
},
],
restaurant:{
    type:mongoose.Types.ObjectId,
    ref: "Restaurants",
    required:true,
},
});


export const FoodModel=mongoose.model("Foods",FoodSchema);