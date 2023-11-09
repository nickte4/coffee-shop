import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGO_CONNECTION_URI}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("users", userSchema);

export default collection;
