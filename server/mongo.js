require("dotenv").config();
const mongoose = require("mongoose");
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

module.exports = collection;
