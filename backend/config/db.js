import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_url);
    console.log("MongoDb Connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
