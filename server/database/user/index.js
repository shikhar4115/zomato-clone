import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    fullname: { type: String,require: true},
    email: {type: String,required: true},
    password: {type: String },
    address:[{ detail:{type: String}, for:{type: String}  }],
    phoneNumber:[{type: Number }],
});

 export const UserModel= mongoosse.model("Users", UserSchema);