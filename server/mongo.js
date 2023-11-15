import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectionString = `${process.env.MONGO_CONNECTION_URI}`;

mongoose
  .connect(`${connectionString}`)
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
  accessToken: {
    type: String,
    required: true,
  },
});

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  order: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const users = mongoose.model("users", userSchema);
const contacts = mongoose.model("contacts", contactSchema);
const orders = mongoose.model("orders", orderSchema);

export { users, contacts, orders };
