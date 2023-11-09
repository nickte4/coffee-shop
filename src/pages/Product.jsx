import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  console.log(product);
  return <></>;
}
