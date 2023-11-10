import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {
  // get the product id from the url
  const { id } = useParams();
  // find the product in the products data json
  const product = products.find((item) => item.id === Number(id));

  return (
    <>
      <div className="pt-24 h-max">
        <div className="lg:flex lg:items-start lg:gap-10">
          <img
            className="w-96 mx-auto lg:ml-32 mt-20 lg:mt-24 rounded-3xl"
            src={`/${product.coverImg}`}
            alt="product image"
          />
          <div className="mt-10 flex justify-center flex-col items-center gap-5 mx-12 lg:mr-16">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <h1 className="text-2xl ">{product.reviewCount} Reviews</h1>
            <h1 className="text-2xl ">
              ${product.price} | {product.size}
            </h1>
            <p className="bg-primary rounded-3xl p-5 text-white text-sm text-center">
              {product.desc}
            </p>
            <button className="transition-all bg-secondary text-3xl p-5 rounded-2xl hover:scale-110 hover:bg-primary hover:text-white">
              Add To Cart - ${product.price}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
