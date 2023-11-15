import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CartList from "./CartList";
import products from "../data/products";
import { useState, useEffect } from "react";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const cartTotalPrice =
    cart.length > 0
      ? cart.reduce((acc, item) => {
          const product = products.find(
            (product) => product.id === item.productId
          );
          return acc + product.price * item.quantity;
        }, 0) // 0 is the initial value of acc
      : 0;

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, [showCart]);

  // toggles cart open and closed
  function toggleCart() {
    setShowCart((prevShowCart) => !prevShowCart);
  }

  // empties cart
  function emptyCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

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
      <div>
        {!showCart ? (
          <>
            <ShoppingCartOutlinedIcon
              className="cursor-pointer hover:border-b-2 hover:text-primary border-primary"
              fontSize="large"
              onClick={toggleCart}
            />
          </>
        ) : (
          <>
            <ShoppingCartOutlinedIcon
              className="cursor-pointer hover:border-b-2 hover:text-primary border-primary"
              fontSize="large"
              onClick={toggleCart}
            />
            {/* black background to cover page when cart is open */}
            <div
              onClick={toggleCart}
              className="fixed left-0 top-0 w-full h-full select-none bg-black opacity-40"
            ></div>
            <div className="animate-slide-in-from-right border-black border-2 fixed w-1/2 h-full right-0 top-0 z-30 bg-secondary rounded-2xl overflow-y-scroll">
              <CloseIcon
                className="cursor-pointer opacity-30 hover:opacity-100 relative top-2 left-2"
                fontSize="large"
                onClick={toggleCart}
              />
              <h1
                onClick={emptyCart}
                className="text-lg absolute top-3 right-8 hover:underline cursor-pointer"
              >
                Empty Cart
              </h1>
              <div className="mt-5 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">Shopping Cart</h1>
                <div className="mt-1 border-black border w-5/6"></div>
                <CartList cart={cart} removeItemFromCart={removeItemFromCart} />
              </div>
              <div className="relative left-5 lg:left-1/4 mt-3 mb-2 text-2xl flex gap-5">
                <a href="/checkout">
                  <button className="border border-black rounded-2xl p-2 hover:bg-primary hover:text-white">
                    Go To Checkout
                  </button>
                </a>
                <div className="text-lg">
                  <h1>{cart.length} items</h1>
                  <h1>Subtotal: ${Number(cartTotalPrice).toFixed(2)}</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
