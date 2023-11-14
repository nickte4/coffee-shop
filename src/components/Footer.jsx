export default function Footer() {
  return (
    <>
      <div className="w-screen h-48 flex justify-evenly items-center bg-secondary">
        <div>
          <a href="/">
            <img
              className="w-24 p-2 ml-3 bg-background rounded-full"
              src="/coffee-icon.png"
              alt=""
            />
            <h1 className="mt-2 text-lg">Untitled Coffee</h1>
          </a>
        </div>
        <div className="flex justify-evenly gap-5">
          <a href="/shop">
            <h3 className="transition-all duration-200 text-2xl hover:border-b-2 w-max border-primary">
              Shop
            </h3>
          </a>
          <span className="text-2xl">|</span>
          <a href="/about">
            <h3 className="transition-all duration-200 text-2xl hover:border-b-2 w-max border-primary border-spacing-2">
              About
            </h3>
          </a>
          <span className="text-2xl">|</span>
          <a href="/contact">
            <h3 className="transition-all duration-200 text-2xl hover:border-b-2 w-max border-primary border-spacing-2">
              Contact
            </h3>
          </a>
          <span className="text-2xl">|</span>
          <a href="/faq">
            <h3 className="transition-all duration-200 text-2xl hover:border-b-2 w-max border-primary border-spacing-2">
              FAQ
            </h3>
          </a>
        </div>
      </div>
    </>
  );
}
