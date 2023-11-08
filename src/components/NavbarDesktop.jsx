import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function NavbarDesktop() {
  return (
    <>
      <div className="w-screen transition-all fixed bg-background h-24 z-10 shadow-2xl mb-5">
        <ul className="flex justify-center content-center gap-10 my-8 text-2xl">
          <a href="/">
            <LocalCafeIcon
              fontSize="large"
              className="hover:text-primary transition-all cursor-pointer mr-80"
            />
          </a>
          <li className="hover:underline underline-offset-2 hover:text-primary transition-all">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline underline-offset-2 hover:text-primary transition-all">
            <a href="/shop">Shop</a>
          </li>
          <li className="hover:underline underline-offset-2 hover:text-primary transition-all">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}
