import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    name : String,
    age : Number,
    email : String
},{timestamps : true});

const user = mongoose.model('users', userSchema);

export default user;