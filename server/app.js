import express from "express";
import { users, contacts } from "./mongo.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

function generateRandomString() {
  return Math.random().toString(36).slice(2);
}

/* paste this in console to clear cookies */
// document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

// POST request to /api/contacts
app.post("/api/contact", cors(), async (req, res) => {
  console.log("contact send attempt");
  const { name, email, subject, message } = req.body;
  const data = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  try {
    await contacts.insertMany(data);
    return res.json("contact form sent");
  } catch (e) {
    return res.json("send contacts error");
  }
});

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
    const account = await users.findOne({ email: email });
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
    const emailExists = await users.findOne({ email: email });
    if (emailExists) {
      // can't sign up, email already exists
      return res.json("exist");
    } else {
      // generate access token
      data.accessToken = generateRandomString();
      await users.insertMany(data);
      return res.json(data.accessToken);
    }
  } catch (e) {
    return res.json("login error");
  }
});

app.listen(8000, () => console.log("Server is running on port 8000"));
