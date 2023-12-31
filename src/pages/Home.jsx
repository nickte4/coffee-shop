import Card from "../components/Card";
import { Link } from "react-router-dom";
import bestSellers from "../data/bestSellers";
import newAdditions from "../data/newAdditions";

export default function Home() {
  document.title = "Untitled Coffee | Home";
  // grab best seller coffee bags from data
  const bestSellerCards = bestSellers.map((item) => {
    return (
      <Link key={item.id} to={`/products/${item.id}`}>
        <Card {...item} />
      </Link>
    );
  });

  // grab newest addition coffee bags from data
  const newAdditionCards = newAdditions.map((item) => {
    return (
      <Link key={item.id} to={`/products/${item.id}`}>
        <Card key={item.id} {...item} />
      </Link>
    );
  });

  return (
    <>
      <div className="pt-24 z-0 h-max font-roboto">
        <div className="relative">
          <img className="w-screen" src="/home-image.jpg" alt="coffee image" />
          <a href="/shop">
            <button className="w-20 h-12 text-2xl sm:w-24 sm:h-16 md:w-28 md:h-16 md:text-3xl lg:w-48 lg:h-28 lg:text-5xl rounded-md bg-background transition-all duration-200 absolute bottom-16 left-16 hover:bg-primary hover:text-white">
              Shop
            </button>
          </a>
        </div>
        <h1 className="text-5xl my-12 ml-5 bg-primary text-white w-max p-5 rounded-lg">
          Best Sellers
        </h1>
        <div className="grid grid-rows-2 grid-cols-2 place-items-center lg:flex lg:justify-evenly lg:content-center gap-10 bg-background mx-5">
          {bestSellerCards}
        </div>
        <h1 className="text-5xl my-12 ml-5 bg-primary text-white w-max p-5 rounded-lg">
          Newest Additions
        </h1>
        <div className="grid grid-rows-1 grid-cols-2 place-items-center mb-20 lg:flex lg:justify-evenly lg:content-center gap-10 bg-background mx-5">
          {newAdditionCards}
        </div>
      </div>
    </>
  );
}
