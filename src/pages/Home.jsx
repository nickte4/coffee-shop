export default function Home() {
  return (
    <>
      <div className="pt-16 z-0 min-h-screen">
        <div className="relative">
          <img
            className="h-1/2 w-screen"
            src="/home-image.jpg"
            alt="coffee image"
          />
          <button className="w-28 h-16 text-2xl rounded-md bg-background transition-all duration-200 absolute bottom-32 left-16 hover:bg-primary hover:text-white">
            Shop
          </button>
        </div>
        <h1>home</h1>
      </div>
    </>
  );
}
