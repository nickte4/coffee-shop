import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CartList from "./CartList";
import { useState } from "react";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  function toggleCart() {
    setShowCart((prevShowCart) => !prevShowCart);
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
            <div className="animate-slide-in-from-right border-black border-2 absolute w-1/3 h-large right-0 top-0 z-30 bg-secondary rounded-2xl">
              <CloseIcon
                className="cursor-pointer opacity-30 hover:opacity-100 relative top-2 left-2"
                fontSize="large"
                onClick={toggleCart}
              />
              <div className="mt-5 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-center">Shopping Cart</h1>
                <div className="mt-1 border-black border w-5/6"></div>
                <CartList />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
