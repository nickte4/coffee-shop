const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// POST request to /api/login
app.post("/api/login", cors(), async (req, res) => {
  const { email, password } = req.body;

  try {
    const emailExists = await collection.findOne({ email: email });
    if (emailExists) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("login error");
  }
});

// POST request to /api/signup
app.post("/api/signup", cors(), async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };

  try {
    const emailExists = await collection.findOne({ email: email });
    if (emailExists) {
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("login error");
  }
});

app.listen(8000, () => console.log("Server is running on port 8000"));
