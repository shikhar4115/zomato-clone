import Mongoose from "mongoose";

const RestaurantSchema= new Mongoose.Schema({
name:{ type:String, required: true},
city:{type:String, required: true},
address:{type:String, required: true},
mapLocation: { type:String, required: true},
cuisine:[String],
restaurantTimings:String,
contactNumber: Number,
website: Number,
popularDishes:[String],
averageCost:Number,
amenties:[String],
menuImages: {
type:moongoose.Types.ObjectId,
ref:"Images",
},
menu: {
    type:moongoose.Types.ObjectId,
ref:"Menus",
},
reviews:[{type:moongoose.Types.ObjectId,ref:"Reviews"}],
photos:[{type:moongoose.Types.ObjectId,ref:"Images"}],
});

 export const RestaurantModel=mongoose.model("Restaurants", RestaurantSchema);