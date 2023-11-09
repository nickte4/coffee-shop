import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function NavbarDesktop() {
  return (
    <>
      <div className="w-screen transition-all fixed bg-background h-24 z-10 shadow-2xl mb-5">
        <ul className="flex justify-evenly content-center my-8 text-2xl w-screen">
          <a href="/">
            <LocalCafeIcon
              fontSize="large"
              className="hover:text-primary transition-all cursor-pointer mr-48"
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
        </ul>
      </div>
    </>
  );
}
