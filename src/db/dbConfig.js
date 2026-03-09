import mongoose from "mongoose";

const DATABASE = () => {
   return mongoose.connect("mongodb://localhost:27017/testing").then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    })
}

export default DATABASE;