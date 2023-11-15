import products from "../data/products";
import CartList from "../components/CartList";
import { useState, useEffect } from "react";

export default function Checkout() {
  document.title = "Untitled Coffee | Checkout";
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const noItemsInCart = () => {
    return (
      <>
        <h1 className="h-96 text-3xl text-center mt-52">
          There are no items in the cart. <br /> Want to add some? {""}
          <a className="text-accent hover:underline" href="/shop">
            Head to the shop!
          </a>
        </h1>
      </>
    );
  };

  const cartTotalPrice =
    cart.length > 0
      ? cart.reduce((acc, item) => {
          const product = products.find(
            (product) => product.id === item.productId
          );
          return acc + product.price * item.quantity;
        }, 0) // 0 is the initial value of acc
      : 0;

  // remove item from cart
  function removeItemFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // check if item is already in cart
    const itemInCart = cart.find((item) => item.productId === id);
    // remove it from cart, then add cart back
    cart.splice(cart.indexOf(itemInCart), 1);
    // save cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  }

  return (
    <>
      <div className="pt-24 h-max">
        <h1 className="mt-10 pb-5 text-center text-6xl border-b-2 border-black">
          Checkout
        </h1>
        {cart.length === 0 ? (
          noItemsInCart()
        ) : (
          <>
            <CartList cart={cart} removeItemFromCart={removeItemFromCart} />
            <div className="my-10 flex justify-center items-center">
              <button className="transition-all text-4xl border border-black rounded-2xl p-5 hover:scale-110 hover:bg-primary hover:text-white">
                Pay Now: ${cartTotalPrice.toFixed(2)}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
