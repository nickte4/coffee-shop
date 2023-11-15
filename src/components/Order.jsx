import products from "../data/products";
import ItemDisplay from "./ItemDisplay";

export default function Order({ date, order, status, total }) {
  const items = order.map((item) => {
    const product = products.find((product) => product.id === item.productId);
    const quantity = item.quantity;

    return (
      <div key={item.productId}>
        <ItemDisplay product={product} quantity={quantity} />
      </div>
    );
  });

  return (
    <>
      <div className="border-t-2 border-black">
        <div className="flex justify-end gap-5 items-center mr-5">
          <h1 className="text-3xl">{date}</h1>
          <h1 className="text-3xl">|</h1>
          <h1 className="text-3xl">
            {status == "pending" ? "Pending" : "In Transport"}
          </h1>
          <h1 className="text-3xl">|</h1>
          <h1 className="text-3xl text-center">Total: ${total}</h1>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">{items}</h1>
        </div>
      </div>
    </>
  );
}
