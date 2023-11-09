import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <>
      {!menuOpen ? (
        <div className="w-screen flex items-center justify-between transition-all fixed bg-background h-24 z-10 shadow-2xl mb-5">
          <MenuIcon
            onClick={toggleMenu}
            fontSize="large"
            className="m-8 cursor-pointer text-gray-600 hover:text-black rounded-full"
          />
          <a href="/">
            <img
              className="w-16 p-2 mr-10 bg-secondary rounded-full"
              src="/coffee-icon.png"
              alt=""
            />
          </a>
        </div>
      ) : (
        <div className="top-0 left-0 transition-all bg-background fixed shadow-2xl w-1/3 h-screen z-20">
          <CloseIcon
            onClick={toggleMenu}
            fontSize="large"
            className="absolute left-3 top-3 cursor-pointer rounded-full text-gray-600 hover:text-black"
          />
          <ul className="mx-5 my-20 text-3xl text-gray-600">
            <li className="transition-all hover:scale-110 hover:translate-x-5 hover:text-black">
              <a href="/">Home</a>
            </li>
            <li className="transition-all hover:scale-110 hover:translate-x-5 hover:text-black">
              <a href="/shop">Shop</a>
            </li>
            <li className="transition-all hover:scale-110 hover:translate-x-5 hover:text-black">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
