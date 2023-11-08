export default function Navbar() {
  return (
    <>
      <ul className="border-2 border-black p-5 mx-20 my-5">
        <li>
          <a
            className="hover:text-purple-400 hover:underline underline-offset-2"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-purple-400 hover:underline underline-offset-2"
            href="/about"
          >
            About
          </a>
        </li>
      </ul>
    </>
  );
}
