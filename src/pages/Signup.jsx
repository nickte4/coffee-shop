import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleShowPasswordChange() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  function handleShowConfirmPasswordChange() {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  }

  // handles sign up form submission
  async function submit(e) {
    e.preventDefault();

    // check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // add email and password to database
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
            // add cookie to browser on sign up
            document.cookie = "access_token = " + res.data;
          }
        })
        .catch((err) => {
          alert("Can't sign in. Error occurred.");
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
            className="mt-4 flex flex-col justify-center items-center gap-5"
            action="POST"
          >
            <input
              className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter email..."
            />
            <div className="relative">
              {/* if showPassword is true, show the password, else show the password as a series of dots */}
              {!showPassword ? (
                <>
                  <input
                    className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="Enter password..."
                  />
                  <VisibilityIcon
                    className="absolute right-3 top-1 text-gray-400 cursor-pointer"
                    fontSize="large"
                    onClick={handleShowPasswordChange}
                  />
                </>
              ) : (
                <>
                  <input
                    className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    type="text"
                    onChange={handlePasswordChange}
                    placeholder="Enter password..."
                  />
                  <VisibilityOffIcon
                    className="absolute right-3 top-1 text-gray-400 cursor-pointer"
                    fontSize="large"
                    onClick={handleShowPasswordChange}
                  />
                </>
              )}
            </div>
            <div className="relative">
              {/* if showPassword is true, show the password, else show the password as a series of dots */}
              {!showConfirmPassword ? (
                <>
                  <input
                    className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    type="password"
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm password..."
                  />
                  <VisibilityIcon
                    className="absolute right-3 top-1 text-gray-400 cursor-pointer"
                    fontSize="large"
                    onClick={handleShowConfirmPasswordChange}
                  />
                </>
              ) : (
                <>
                  <input
                    className="rounded-lg w-60 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    type="text"
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm password..."
                  />
                  <VisibilityOffIcon
                    className="absolute right-3 top-1 text-gray-400 cursor-pointer"
                    fontSize="large"
                    onClick={handleShowConfirmPasswordChange}
                  />
                </>
              )}
            </div>
            <input
              className="bg-white rounded-2xl w-20 h-12 cursor-pointer hover:bg-accent hover:text-white"
              type="submit"
              value="Sign up"
              onClick={submit}
            />
          </form>
          <h1 className="mt-4 text-center text-white">
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
