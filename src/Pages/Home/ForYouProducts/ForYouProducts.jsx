import React, { useContext } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import useProduct from "../../../Hooks/useProduct";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "../../../Components/PoductCard/ProductCard";
import GraphemeSplitter from "grapheme-splitter";
import ErrorPage from "../../../Components/ui/ErrorPage";
import Swal from "sweetalert2";
import { UserContext } from "../../../Context/UserContext";

const ForYouProducts = () => {
  const { data: products = [], refetch, isLoading, isError } = useProduct();
  const {user} = useContext(UserContext)
  const splitter = new GraphemeSplitter();

 const handleAddToCart = async (productId) => {
   // Check if the user is logged in
   if (!user) {
     // Trigger a Swal alert if not logged in
     Swal.fire({
       icon: "warning",
       title: "Login Required",
       text: "You need to log in to add products to your cart.",
       confirmButtonText: "Login",
     }).then((result) => {
       if (result.isConfirmed) {
         // Navigate to the login page if user clicks "Login"
         window.location.href = "/login";
       }
     });
     return; // Exit if user is not logged in
   }

   // Proceed to add product to cart if user is logged in
   try {
     const response = await axios.post(
       `${import.meta.env.VITE_BACKEND_URL}/cart/entry/`,
       { productId, email: user.email }, // Send productId in an object
       {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("access_token")}`, // Pass the access token
         },
       }
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


  // Filter to show only discounted products
  const discountedProducts = products.filter((item) => item.discount > 0);

  return (
    <div>
      <section className="py-14">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
              আপনার পছন্দের উপর ছাড়!
            </h2>
            <p className="mt-4 text-sm">{/* Description content */}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-10 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 xl:gap-14 ">
            {discountedProducts.length > 0 ? (
              discountedProducts
                .slice(0, 5)
                .map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                    handleAddToCart={handleAddToCart}
                  />
                ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                <ErrorPage></ErrorPage>
              </p>
            )}
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
