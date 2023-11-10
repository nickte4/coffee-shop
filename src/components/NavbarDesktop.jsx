import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState, useEffect } from "react";

export default function NavbarDesktop() {
  const [loggedIn, setLoggedIn] = useState(false);

  // check if user is logged in
  useEffect(() => {
    // check if access token cookie exists
    if (document.cookie.includes("access_token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      <div className="w-screen transition-all duration-300 fixed bg-background h-24 z-10 shadow-2xl mb-5">
        <ul className="flex justify-evenly content-center items-center my-4 text-2xl w-screen">
          <a href="/">
            <img
              className="w-16 p-2 bg-secondary rounded-full"
              src="/coffee-icon.png"
              alt=""
            />
          </a>
          <li className="hover:border-b-2 border-primary hover:text-primary transition-all">
            <a href="/">Home</a>
          </li>
          <li className="hover:border-b-2 border-primary hover:text-primary transition-all">
            <a href="/shop">Shop</a>
          </li>
          <li className="hover:border-b-2 border-primary hover:text-primary transition-all">
            <a href="/about">About</a>
          </li>
          {loggedIn ? (
            <a href="/profile">
              <PersonOutlineIcon
                className="hover:border-b-2 hover:text-primary border-primary transition-all duration-300"
                fontSize="large"
              />
            </a>
          ) : (
            <a href="/login">
              <PersonOutlineIcon
                className="hover:border-b-2 hover:text-primary border-primary transition-all duration-300"
                fontSize="large"
              />
            </a>
          )}
        </ul>
      </div>
    </>
  );
}
