import Order from "./Order";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Transactions({ email }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // get all orders under user's email
    async function getOrders() {
      try {
        const response = await axios.get("http://localhost:8000/api/orders/", {
          params: {
            email: email,
          },
        });
        // set orders to response data
        setOrders(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    getOrders();
  }, []);

  const ordersList = orders.map((order) => {
    return (
      <Order
        key={order._id}
        date={order.date}
        order={order.order}
        status={order.status}
        total={order.total}
      />
    );
  });

  return (
    <>
      <div className="my-5">
        <h1 className="my-10 text-6xl text-center">Transactions</h1>
        {ordersList}
      </div>
    </>
  );
}
