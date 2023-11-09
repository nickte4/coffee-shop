import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {
  // get the product id from the url
  const { id } = useParams();
  // find the product in the products data json
  const product = products.find((item) => item.id === Number(id));

  console.log(product);
  return (
    <>
      <div className="pt-24 h-max">
        <h1>Product</h1>
      </div>
    </>
  );
}
