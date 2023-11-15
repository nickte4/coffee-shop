import products from "../data/products";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function CartList(props) {
  const cart = props.cart;

  /*   const product = products.find((item) => item.id === Number(id)); */
  const itemsInCart = cart.map((item) => {
    // get the product from the products data list
    const product = products.find((product) => product.id === item.productId);
    // get quantity of item in cart
    const quantity = item.quantity;

    return (
      <div key={item.productId}>
        <div className="transition-all border-b-2 border-black flex justify-center items-center p-5">
          <img
            className="w-1/4 rounded-lg"
            src={`/${product.coverImg}`}
            alt="product image"
          />
          <div className="w-3/4 flex flex-col text-center first-letter:justify-center items-center">
            <a href={`/products/${product.id}`}>
              <h1 className="hover:underline underline-offset-2">
                {product.name}
              </h1>
            </a>
            <h1 className="text-lg">
              <span className="text-sky-700">${product.price}</span> |{" "}
              <span className="opacity-50">{product.size}</span>
            </h1>
            <div className="text-lg flex items-center gap-3 opacity-50">
              Quantity: {quantity}
              <DeleteOutlineIcon
                onClick={props.removeItemFromCart}
                className="hover:opacity-100 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{itemsInCart}</>;
}
