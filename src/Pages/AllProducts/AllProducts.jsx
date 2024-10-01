import React, { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import ProductCard from "../../Components/PoductCard/ProductCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { IoSearch } from "react-icons/io5";
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";

const AllProducts = () => {
  const { data: products = [], refetch, isLoading, error } = useProduct();
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Get unique categories from the product data
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-4">
      <div className="navbar mb-4 rounded-md bg-base-200">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">সকল পন্য</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control pr-5">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchQuery} // Bind search query to input
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
            />
          </div>
          <div className="dropdown dropdown-end">
            <div className="pr-10 cursor-pointer">
              <IoSearch size={30} />
            </div>
          </div>
        </div>
      </div>

      <TabGroup>
        {/* Flex container to align tabs on the left and content on the right */}
        <div className="flex">
          {/* Tab list on the left side */}
          <TabList className="flex h-full flex-col w-1/6 p-4 bg-base-200 rounded-lg">
            <Tab
              className={({ selected }) =>
                `py-2 px-4 my-1 text-left w-full rounded-lg cursor-pointer 
                ${selected ? "bg-[#D19E47] text-white" : "bg-white text-black"}`
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
                {category}
              </Tab>
            ))}
          </TabList>

          {/* Tab panels (content) on the right side */}
          <TabPanels className="w-3/4 p-4 ml-4">
            {/* All Products Panel */}
            <TabPanel>
              <div className="grid grid-cols-3 gap-20">
                {/* Show skeletons while loading */}
                {isLoading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <CardSkeleton key={index} />
                    ))
                  : filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
              </div>
            </TabPanel>
            {/* Category-specific Panels */}
            {categories.map((category, index) => (
              <TabPanel key={index}>
                <div className="grid grid-cols-3 gap-20">
                  {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <CardSkeleton key={index} />
                      ))
                    : filteredProducts
                        .filter((product) => product.category === category)
                        .map((filteredProduct) => (
                          <ProductCard
                            key={filteredProduct.id}
                            product={filteredProduct}
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
