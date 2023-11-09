import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    const navigate = useNavigate();

    try {
      await axios
        .post("http://localhost:8000/api/signup", {
          email,
          password,
        })
        .then((res) => {
          // user already exists, unsuccessful sign up
          if (res.data == "exist") {
            alert("Can't sign up. User already exists.");
          } else {
            // user does not exist, successful sign up
            navigate("/");
          }
        })
        .catch((err) => {
          alert("Can't log in. User does not exist.");
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
          <h1 className="pt-10 text-center text-5xl text-white">Sign up</h1>
          <form
            className="mt-12 flex flex-col justify-center items-center gap-5"
            action="POST"
          >
            <input
              className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email..."
            />
            <input
              className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter password..."
            />
            <input
              className="bg-white rounded-2xl w-20 h-12 cursor-pointer hover:bg-accent hover:text-white"
              type="submit"
              value="Sign up"
              onClick={submit}
            />
          </form>
          <h1 className="mt-10 text-center text-white">
            Already a user?{" "}
            <Link
              className="text-primary hover:underline underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}
