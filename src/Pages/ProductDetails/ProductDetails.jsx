import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const singleProduct = useLoaderData();
  const [quantity, setQuantity] = useState(1);

  if (!singleProduct) {
    return (
      <p>
        <HashLoader color="#D19E47" speedMultiplier={2} />
      </p>
    );
  }
  return (
    <div className="container mx-auto p-6 mt-16 mb-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 justify-center">
          <img
            src={`${import.meta.env.VITE_BASE_URL}${singleProduct.images}`}
            alt={singleProduct.title}
            className="w-full max-w-md rounded-lg"
          />
          <img
            src={`${import.meta.env.VITE_BASE_URL}${singleProduct.images}`}
            alt={singleProduct.title}
            className="w-full max-w-md rounded-lg"
          />
          <img
            src={`${import.meta.env.VITE_BASE_URL}${singleProduct.images}`}
            alt={singleProduct.title}
            className="w-full max-w-md rounded-lg"
          />
          <img
            src={`${import.meta.env.VITE_BASE_URL}${singleProduct.images}`}
            alt={singleProduct.title}
            className="w-full max-w-md rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2">
          <nav className="mb-4"></nav>

          <h1 className="text-2xl font-semibold mb-4">{singleProduct.title}</h1>
          <div className="flex mb-2 product-center">
            <p className="flex">
              <IoMdStar color="black" className="size-4 text-black" />
              <IoMdStar color="black" className="size-4 text-black" />
              <IoMdStar color="black" className="size-4 text-black" />
              <IoMdStar color="black" className="size-4 text-black" />
            </p>
            <p className="text-sm">({singleProduct.rating})</p>
          </div>
          <p className="text-base text-gray-800 font-semibold mb-2">
            মূল্য : {singleProduct.price} টাকা
          </p>
          {/* Stock availabe */}
          {/* Quantity Selector */}
          <div className="">
            <label className=" text-lg font-medium">Quantity</label>
            <div className="flex items-center gap-4">
              <div className=" flex ">
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  className="w-20 p-1 border border-gray-300 text-center  focus:outline-none"
                />
              </div>
              <div className="">
                <button className="btn btn-sm  bg-[#D19E47] text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <p className="mt-3">উপলব্ধ স্টক : {singleProduct.stock} </p>

          {/* Add to Cart Button */}
          <div className="flex justify-center lg:justify-start"></div>

          {/* Product Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">পণ্যের বিবরণ</h2>
            <p className="text-gray-700 text-base">
              {singleProduct.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
