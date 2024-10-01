import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";



const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div key={product.id} className=" card-compact w-80  ">
      <figure className="h- overflow-hidden">
        <Link key={product.id} to={`/product-details/${product.id}`}>
          <img
            className="transform hover:scale-105 transition duration-300 rounded-md"
            src={`${import.meta.env.VITE_BASE_URL}${product.images[0]}`}
            alt={product.images[0]}
          />
        </Link>
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title ">{product.title}</h2>
        <p className="text-small -mt-2 ">{product.category}</p>
        <div className="flex -mt-1">
          <p className="text-small flex gap-2 mt-1 font-semibold">
            <span>মূল্য</span>
            {product.price} টাকা
          </p>
          <div className="flex product-center">
            <p className="flex">
              <IoMdStar color="black" className="size-4 text-black" />
              <IoMdStar color="black" className="size-4 text-black" />
              <IoMdStar color="black" className="size-4 text-black" />
              <IoMdStar color="black" className="size-4 text-black" />
            </p>
            <p className="text-sm">({product.rating})</p>
          </div>
        </div>
        <div className="card-actions justify-between ">
          <button
            onClick={() => {
              handleAddToCart(product.id);
            }}
            className="btn btn-sm bg-[#D19E47] font-light w-[50%]"
          >
            Add to cart
          </button>
          <button className="btn bg-[#F9EEDD] btn-sm  font-light border-none w-[40%]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
