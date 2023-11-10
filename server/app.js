import express from "express";
import collection from "./mongo.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

function generateRandomString() {
  return Math.random().toString(36).slice(2);
}

// POST request to /api/login
app.post("/api/login", cors(), async (req, res) => {
  console.log("login attempt");
  const { email, password } = req.body;
  const accountData = {
    emailExists: false,
    passwordMatches: false,
  };

  try {
    // get account from database
    const account = await collection.findOne({ email: email });
    if (account) {
      accountData.emailExists = true;
      // check password match
      if (account.password === password) {
        accountData.passwordMatches = true;
        accountData.accessToken = account.accessToken;
      }
    }
    return res.json(accountData);
  } catch (e) {
    return res.json("login error");
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
      // can't sign up, email already exists
      return res.json("exist");
    } else {
      // generate access token
      data.accessToken = generateRandomString();
      await collection.insertMany(data);
      return res.json(data.accessToken);
    }
  } catch (e) {
    return res.json("login error");
  }
});

app.listen(8000, () => console.log("Server is running on port 8000"));
