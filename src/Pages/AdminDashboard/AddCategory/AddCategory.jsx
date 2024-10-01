import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useCategory from "../../../Hooks/useCategory";
import toast from "react-hot-toast";

const AddCategory = () => {
  // Fetch categories using the custom hook
  const { data: categories = [], refetch, isLoading, error } = useCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make API request to add the category
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/product/category/entry`,
        data
      ); // Replace with your actual API endpoint
      console.log("Category added:", response.data);
      toast.success("Category added successfully")
      reset(); // Reset form after successful submission
      refetch(); // Refetch the categories after adding a new one
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error(`${error}`)
    }
  };

  

  return (
    <div className="flex justify-between gap-10 p-4 ">
      {/* Categories List */}
      <div className="w-1/2 bg-base-200 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading categories</p>
        ) : (
          <div className="overflow-x-auto ">
            <table className="table">
              {/* Table head */}
              <thead>
                <tr>
                  <th className="border-base-300 border-r-2 border-t-2 border-l-2 border-b-2 text-base text-center">
                    SL
                  </th>
                  <th className="border-base-300 border-r-2 border-t-2 border-l-2 border-b-2 text-base text-center">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.id}>
                    <td className="  text-base text-center border-base-300 border-r-2 border-t-2 border-l-2 border-b-2">
                      {index + 1}
                    </td>
                    <td className="border-base-300  text-base text-center border-r-2 border-t-2 border-l-2 border-b-2">
                      {category.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add New Category Form */}
      <div className="w-1/2 bg-base-200 h-full rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text ">Category Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter category name"
              {...register("category_name", { required: "Category name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <button type="submit" className="btn text-white bg-[#D19E47] w-full">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
