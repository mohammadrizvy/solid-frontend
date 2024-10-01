import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import useProduct from "../../../Hooks/useProduct";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../../Components/PoductCard/ProductCard";
import GraphemeSplitter from "grapheme-splitter";

const ForYouProducts = () => {
  const { data: product = [], refetch, isLoading, error } = useProduct();
const splitter = new GraphemeSplitter();

  const handleAddToCart = async (productId) => {
    console.log("addded to the cart product : ",productId)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/entry/`,
        { productId } // Send productId in an object
      );
      console.log("Success:", response.data);
      toast.success("Added to the cart.", {
        style: {
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#D19E47",
          secondary: "#F9EEDD",
        },
      });
      refetch(); 
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products.</p>;

  return (
    <div>
      <section className="py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
              আপনার জন্য বিশেষ
            </h2>
            <p className="mt-4 text-sm">{/* Description content */}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 m sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14 ">
            {product.map((items) => (
              <ProductCard
              key={items.id}
              product={items}
              handleAddToCart={handleAddToCart}
              />
            ) )}
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn bg-[#D19E47] underline text-white px-6 py-2">
              Load more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForYouProducts;
