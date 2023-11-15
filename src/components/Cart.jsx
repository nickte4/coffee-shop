import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CartList from "./CartList";
import { useState, useEffect } from "react";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

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
            <div className="fixed left-0 top-0 w-full h-full select-none bg-black opacity-40"></div>
            <div className="animate-slide-in-from-right border-black border-2 absolute w-1/3 h-large right-0 top-0 z-30 bg-secondary rounded-2xl">
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
                <CartList cart={cart} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
