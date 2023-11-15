import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Quantity from "../components/Quantity";
import { trusted } from "mongoose";

export default function Product() {
  const [count, setCount] = useState(1);
  const [showItemAddedModal, setShowItemAddedModal] = useState(false);

  // increment quantity
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  // decrement quantity
  function decrementCount() {
    setCount((prevCount) => {
      if (prevCount == 1) {
        return 1;
      } else {
        return prevCount - 1;
      }
    });
  }

  // show item was added modal for 2 seconds
  function handleShowItemAddedModal() {
    setShowItemAddedModal(true);
    setTimeout(() => {
      setShowItemAddedModal(false);
    }, 2000);
  }

  document.title = "Untitled Coffee | Product";
  // get the product id from the url
  const { id } = useParams();
  // find the product in the products data json
  const product = products.find((item) => item.id === Number(id));

  // add item to cart
  function addItemToCart() {
    // show item added modal
    handleShowItemAddedModal();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // check if item is already in cart
    const itemInCart = cart.find((item) => item.productId === product.id);
    if (itemInCart) {
      // if item is in cart, remove it, increment quantity, then add it back
      cart.splice(cart.indexOf(itemInCart), 1);
      itemInCart.quantity += count;
      cart.push(itemInCart);
    } else {
      let item = {
        productId: product.id,
        quantity: count,
      };
      cart.push(item);
    }
    // save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <>
      <div className="pt-24 h-max">
        <div className="lg:flex lg:items-start lg:gap-10 mb-10">
          <img
            className="w-96 mx-auto lg:ml-32 mt-20 lg:mt-24 rounded-3xl"
            src={`/${product.coverImg}`}
            alt="product image"
          />
          <div className="mt-10 flex justify-center flex-col items-center gap-5 mx-12 lg:mr-16">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <h1 className="text-2xl ">{product.reviewCount} Reviews</h1>
            <h1 className="text-2xl ">
              ${product.price} | {product.size}
            </h1>
            <p className="bg-primary rounded-3xl p-5 text-white text-sm text-center">
              {product.desc}
            </p>
            <div className="flex gap-10 items-center">
              <button
                onClick={addItemToCart}
                className="transition-all bg-secondary text-3xl p-5 rounded-2xl hover:scale-110 hover:bg-primary hover:text-white"
              >
                Add To Cart - ${product.price}
              </button>
              <Quantity
                count={count}
                increment={incrementCount}
                decrement={decrementCount}
              />
              {showItemAddedModal && (
                <div className="fixed left-1/4 top-40 w-1/2 h-1/6 bg-secondary rounded-lg text-center pt-8 text-4xl border-black border-2 p-5">
                  <h1>
                    Added {count} {product.name}
                    {count > 1 ? "s" : ""}!
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
