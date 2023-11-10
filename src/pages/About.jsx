export default function About() {
  document.title = "Untitled Coffee | About";
  return (
    <>
      <div className="pt-24 h-max flex flex-col lg:flex-row">
        <div className="lg:w-1/2 bg-primary text-white mx-10 py-20 rounded-2xl my-20 flex flex-col justify-center items-center gap-10">
          <h1 className="text-6xl border-b-4 border-white pb-1">About Us</h1>
          <p className="text-2xl px-20">
            Priding ourselves on our untitled coffee beans, we strive for a deep
            richness in every roast we make. We are a small team of coffee
            brewers, lovers, and enthusiasts. We hope you enjoy our coffee as
            much as we do!
          </p>
        </div>
        <div className="overflow-hidden lg:w-1/2">
          <img
            className="hover:scale-110 duration-700 transition-all w-screen h-96 lg:h-auto object-cover object-bottom"
            src="/about-image.jpg"
            alt="about image"
          />
        </div>
      </div>
    </>
  );
}
