import React, { useContext, useState } from "react";
import useProduct from "../../Hooks/useProduct";
import useCategory from "../../Hooks/useCategory";
import ProductCard from "../../Components/PoductCard/ProductCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { IoSearch } from "react-icons/io5";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { UserContext } from "../../Context/UserContext";

const AllProducts = () => {
  const { data: products = [], refetch, isLoading } = useProduct();
  const { data: categories = [] } = useCategory();
  const [searchQuery, setSearchQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const {user} = useContext(UserContext)

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

  // Filter and sort products
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply rating filter
  if (ratingFilter) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating >= ratingFilter
    );
  }

  // Apply in-stock filter
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((product) => product.stock > 0);
  }

  // Sort products by price
  if (priceSort === "high-to-low") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  } else if (priceSort === "low-to-high") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  }

  // Pagination logic
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mt-4">
      <Toaster />
      {/* Search and Filter Controls */}
      <div className="navbar mb-4 rounded-md bg-base-200 flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1 mb-4 md:mb-0">
          <a className="btn btn-ghost text-xl">সকল পন্য</a>
        </div>
        <div className="flex-none gap-2 flex flex-col md:flex-row items-start md:items-center">
          <div className="form-control pr-5 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Rating Filter */}
          <select
            className="select select-bordered w-full md:w-auto"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="4">4 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="1">1 Star & Up</option>
          </select>
          {/* Price Sort */}
          <select
            className="select select-bordered w-full md:w-auto"
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
          {/* In Stock Filter */}
          <label className="cursor-pointer label flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
            />
            <span className="label-text ml-2">In Stock Only</span>
          </label>
        </div>
      </div>

      <TabGroup>
        <div className="flex flex-col lg:flex-row">
          <TabList className="flex lg:flex-col w-full lg:w-1/5 p-4 bg-base-200 rounded-lg overflow-x-auto lg:overflow-hidden">
            <Tab
              className={({ selected }) =>
                `py-2 px-4 my-1 text-left w-full rounded-lg cursor-pointer ${selected ? "bg-[#D19E47] text-white" : "bg-white text-black"}`
              }
            >
              সকল
            </Tab>
            {categories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `py-2 px-4 my-1 text-left w-full rounded-lg cursor-pointer 
                  ${selected ? "bg-[#D19E47] text-white" : "bg-white text-black"}`
                }
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          <TabPanels className="w-full lg:w-4/5 p-4">
            <TabPanel>
              <div className="grid grid-cols-1 gap-6 m sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-14">
                {isLoading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <CardSkeleton key={index} />
                    ))
                  : paginatedProducts.map((product) => (
                      <ProductCard
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                        product={product}
                      />
                    ))}
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center mt-4">
                <button
                  className="btn btn-primary mx-2"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="btn btn-primary mx-2"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            </TabPanel>

            {categories.map((category, index) => (
              <TabPanel key={index}>
                <div className="grid grid-cols-1 gap-6 m sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14">
                  {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <CardSkeleton key={index} />
                      ))
                    : paginatedProducts
                        .filter((product) => product.category === category.name)
                        .map((filteredProduct) => (
                          <ProductCard
                            key={filteredProduct.id}
                            product={filteredProduct}
                            handleAddToCart={handleAddToCart}
                          />
                        ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </TabGroup>
    </div>
  );
};

export default AllProducts;
