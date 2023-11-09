import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function NavbarDesktop() {
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
          <a href="/login">
            <PersonOutlineIcon />
          </a>
        </ul>
      </div>
    </>
  );
}
