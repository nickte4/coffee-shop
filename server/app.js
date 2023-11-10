import express from "express";
import collection from "./mongo.js";
import cors from "cors";
import { trusted } from "mongoose";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// POST request to /api/login
app.post("/api/login", cors(), async (req, res) => {
  console.log("login attempt");
  const { email, password } = req.body;
  const accountData = {
    emailExists: false,
    passwordMatches: false,
  };

  try {
    const emailExists = await collection.findOne({ email: email });
    if (emailExists) {
      accountData.emailExists = true;
      // check password match
      if (emailExists.password === password) accountData.passwordMatches = true;
    }
    res.json(accountData);
  } catch (e) {
    res.json("login error");
  }
});

// POST request to /api/signup
app.post("/api/signup", cors(), async (req, res) => {
  console.log("signup attempt");
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
      await collection.insertMany(data);
    }
  } catch (e) {
    res.json("login error");
  }
});

app.listen(8000, () => console.log("Server is running on port 8000"));
