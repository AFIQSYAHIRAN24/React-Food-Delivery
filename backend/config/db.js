import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://phantombullet0013:JJIu30Msur8PUVAM@cluster0.vc29mzm.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}