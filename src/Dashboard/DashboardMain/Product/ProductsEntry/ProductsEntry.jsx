import React, { useState } from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { MdDeleteForever } from "react-icons/md";

const ProductsEntry = () => {
  const [entries, setEntries] = useState([{}]);

  const handleAddMore = () => {
    setEntries([...entries, {}]);
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="container mx-auto p-4">
        <DashboardBreadcrumb firstItem={"পণ্য"} secondItem={"একাধিক এন্ট্রি"} />
      <div className="bg-white shadow-md rounded p-10">
        {/* Breadcrumb */}

        {entries.map((entry, index) => (
          <div
            key={index}
            className="mb-4 justify-center   p-4 rounded-md relative"
          >
            <button
              className="absolute  bg-red-500 p-2 text-white justify-center rounded-full"
              onClick={() => handleDelete(index)}
            >
              <MdDeleteForever />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="বারকোড"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <select className="mt-1 block w-full px-3 py-2 border  border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm">
                <option value="">ক্যাটেগরী সিলেক্ট</option>
              </select>
              <input
                type="text"
                placeholder="পণ্যের নাম"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="text"
                placeholder="ইউনিট"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="number"
                placeholder="ইউনিট প্রতি গ্রহণ"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="text"
                placeholder="ক্রয় মূল্য"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="text"
                placeholder="বিক্রয় মূল্য"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="text"
                placeholder="পাইকারী মূল্য"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="text"
                placeholder="প্রারম্ভিক স্টক"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
              <input
                type="text"
                placeholder="স্টক এলার্ট"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddMore}
          className="text-blue-600 mt-4 hover:underline"
        >
          + Add More
        </button>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              সেভ
            </button>
            <button className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
              রিসেট
            </button>
          </div>

          <div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md">
              পণ্যের তালিকা
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsEntry;
