import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function submit(e) {
    e.preventDefault();

    // try to log in
    try {
      await axios
        .post("http://localhost:8000/api/login", {
          email,
          password,
        })
        .then((res) => {
          // if the user exists, navigate to the home page
          if (res.data.emailExists && res.data.passwordMatches) {
            navigate("/");
          } else if (res.data.emailExists && !res.data.passwordMatches) {
            // if the password is incorrect, alert the user
            alert("Password incorrect. Try again.");
          } else {
            // if the user does not exist, alert the user
            alert("Email not found. Try again.");
          }
        })
        .catch((err) => {
          alert("Can't log in. Error occurred.");
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="pt-24 h-max">
        <div className="my-40 mx-auto h-96 w-80 bg-secondary rounded-3xl">
          <h1 className="pt-10 text-center text-5xl text-white">Login</h1>
          <form
            className="mt-12 flex flex-col justify-center items-center gap-5"
            action="POST"
          >
            <input
              className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter email..."
            />
            <input
              className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              onChange={handlePasswordChange}
              placeholder="Enter password..."
            />
            <input
              className="bg-white rounded-2xl w-20 h-12 cursor-pointer hover:bg-accent hover:text-white"
              type="submit"
              value="Login"
              onClick={submit}
            />
          </form>
          <h1 className="mt-10 text-center text-white">
            Not a user?{" "}
            <Link
              className="text-primary hover:underline underline-offset-4"
              to="/signup"
            >
              Create an account
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}
