import products from "../data/products";
import CartList from "../components/CartList";
import NoItemsInCart from "../components/NoItemsInCart";
import NoAccountModal from "../components/NoAccountModal";
import PaymentReceived from "../components/PaymentReceived";
import axios from "axios";
import { useState } from "react";

export default function Checkout() {
  document.title = "Untitled Coffee | Checkout";
  // get cart from local storage
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  // show no account modal if user is not logged in
  const [showNoAccountModal, setShowNoAccountModal] = useState(false);

  // show payment received modal
  const [showPaymentReceivedModal, setShowPaymentReceivedModal] =
    useState(false);

  // closes no account modal
  function handleCloseModal() {
    setShowNoAccountModal(false);
  }

  // shows payment received modal and empties cart
  function handleShowPaymentReceivedModal() {
    setShowPaymentReceivedModal(true);
    setTimeout(() => {
      setShowPaymentReceivedModal(false);
      emptyCart();
    }, 2000);
  }

  // shows no account modal
  function handleShowNoAccountModal() {
    setShowNoAccountModal(true);
  }

  // send order to backend
  async function sendOrder() {
    // try to send order
    try {
      await axios
        .post("http://localhost:8000/api/order", {
          order: cart,
          total: cartTotalPrice,
          email: sessionStorage.getItem("email"),
        })
        .then((res) => {
          // if the order was sent, alert the user
          if (res.data === "order sent") {
            handleShowPaymentReceivedModal();
            return;
          } else {
            // if the order was not sent, alert the user
            alert("Order not sent. Try again.");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  // handles pay based on whether user is logged in or not
  function handlePay() {
    if (!document.cookie.includes("token")) {
      handleShowNoAccountModal();
    } else {
      sendOrder();
    }
  }

  // empties cart
  function emptyCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

  // get total price of cart
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
          <NoItemsInCart />
        ) : (
          <>
            <CartList cart={cart} removeItemFromCart={removeItemFromCart} />
            <div className="my-10 flex justify-center items-center">
              <button
                onClick={handlePay}
                className="transition-all text-4xl border border-black rounded-2xl p-5 hover:scale-110 hover:bg-primary hover:text-white"
              >
                Pay Now: ${cartTotalPrice.toFixed(2)}
              </button>
            </div>
            {showPaymentReceivedModal && <PaymentReceived />}
            {showNoAccountModal && (
              <NoAccountModal
                handleClose={handleCloseModal}
                handlePay={handleShowPaymentReceivedModal}
                emptyCart={emptyCart}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
