import React from "react";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart }) => {
  const discountedPrice = product.discount
    ? product.price - product.discount
    : product.price;

  return (
    <div
      key={product.id}
      className="relative card-compact w-full sm:w-20 md:w-72 lg:w-56  shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105"
    >
      {/* Product Image */}
      <figure className="relative h-56 w-full overflow-hidden">
        <Link key={product.id} to={`/product-details/${product.id}`}>
          <img
            className="object-cover h-full  w-full transition-transform transform hover:scale-110"
            src={`${import.meta.env.VITE_BASE_URL}${product.images[0]}`}
            alt={product.title}
          />
          {/* View Details Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <p className="text-white font-semibold text-lg">View Details</p>
          </div>
        </Link>
        {/* Sale Badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Sale
          </span>
        )}
      </figure>

      {/* Product Information */}
      <div className="card-body flex flex-col justify-between p-4">
        {/* Product Title and Category */}
        <h2 className="card-title font-semibold text-sm sm:text-base">
          {product.title}
        </h2>
        <p className="text-xs font-semibold text-gray-500 -mt-2">
          ({product.category})
        </p>

        {/* Product Rating and Price */}
        <div>
          <div className="flex items-center -mt-2">
            <div className="flex">
              {Array(Math.round(product.rating))
                .fill(0)
                .map((_, i) => (
                  <IoMdStar key={i} className="text-yellow-500" />
                ))}
            </div>
            <p className="ml-2 mt-1 text-sm">({product.rating})</p>
          </div>
          <p className="text-base font-semibold text-gray-800">
            {discountedPrice} BDT
            {product.discount && (
              <span className="line-through ml-2 text-red-500 text-sm">
                {product.price} BDT
              </span>
            )}
          </p>
        </div>

        {/* Add to Cart Button */}
        <div className="card-actions flex justify-between mt-2">
          <button
            onClick={() => handleAddToCart(product.id)}
            className="btn btn-sm text-white bg-[#D19E47] font-light w-full hover:bg-[#b8862c]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
