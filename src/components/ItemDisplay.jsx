export default function itemDisplay({ product, quantity }) {
  return (
    <>
      <div key={product.id}>
        <div className="transition-all border-b-2 border-black flex justify-center items-center p-5">
          <img
            className="w-1/4 rounded-lg"
            src={`/${product.coverImg}`}
            alt="product image"
          />
          <div className="w-2/3 flex flex-col text-center first-letter:justify-center items-center">
            <a href={`/products/${product.id}`}>
              <h1 className="hover:underline underline-offset-2">
                {product.name}
              </h1>
            </a>
            <h1 className="text-lg">
              <span className="text-sky-700">${product.price}/ea</span> |{" "}
              <span className="opacity-50">{product.size}</span>
            </h1>
            <span className="text-red-700 text-lg">
              Total: ${(product.price * quantity).toFixed(2)}
            </span>
            <div className="text-lg flex items-center gap-3 opacity-50">
              Quantity: {quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
