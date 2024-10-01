import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCategory from "../../../Hooks/useCategory";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const { data: productCategory = [], refetch, isLoading } = useCategory();
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
   try {
     const formData = new FormData();

     formData.append("title", data.title);
     formData.append("category", data.category);
     formData.append("description", data.description);
     formData.append("price", data.price);
     formData.append("discount", data.discount);
     formData.append("stock", data.stock);
     formData.append("rating", data.rating);
     formData.append("image", selectedImage);

     // Log FormData contents
     const formDataObject = {};
     formData.forEach((value, key) => {
       formDataObject[key] = value;
     });
     console.log(formDataObject); // Log the FormData as an object

     await axios.post(
       `${import.meta.env.VITE_BACKEND_URL}/add/product`,
       formData,
       {
         headers: {
           "Content-Type": "multipart/form-data",
         },
       }
     );

     toast.success("Product added successfully");
     refetch(); // Optionally refetch categories or products after successful submission
   } catch (error) {
     toast.error("Failed to add product");
   }
 };


  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-200 hover:shadow-xl rounded-lg mt-10">
      <Toaster />
      <h2 className="text-2xl font-bold mb-6 text-center">পণ্য যোগ করুন</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
          {/* Product Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">পণ্যের নাম</span>
            </label>
            <input
              type="text"
              placeholder="Enter product title"
              className="input input-bordered w-full"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">বিভাগ</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("category", { required: "Category is required" })}
              defaultValue=""
            >
              <option value="" disabled>
                একটি বিভাগ নির্বাচন করুন
              </option>
              {productCategory.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-red-500">{errors.category.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">বর্ণনা</span>
            </label>
            <textarea
              placeholder="Enter product description"
              className="textarea textarea-bordered w-full"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">মূল্য</span>
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="input input-bordered w-full"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <span className="text-red-500">{errors.price.message}</span>
            )}
          </div>

          {/* Stock */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">স্টক</span>
            </label>
            <input
              type="number"
              placeholder="Enter stock quantity"
              className="input input-bordered w-full"
              {...register("stock", { required: "Stock quantity is required" })}
            />
            {errors.stock && (
              <span className="text-red-500">{errors.stock.message}</span>
            )}
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">রেটিং</span>
            </label>
            <input
              type="number"
              step="0.1"
              max="5"
              placeholder="Enter rating (1 to 5)"
              className="input input-bordered w-full"
              {...register("rating", { required: "Rating is required" })}
            />
            {errors.rating && (
              <span className="text-red-500">{errors.rating.message}</span>
            )}
          </div>

          {/* Discount */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">ছাড়</span>
            </label>
            <input
              type="number"
              placeholder="Enter discount (Optional)"
              className="input input-bordered w-full"
              {...register("discount")}
            />
            {errors.discount && (
              <span className="text-red-500">{errors.discount.message}</span>
            )}
          </div>

          {/* Images */}
          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">ছবি আপলোড করুন</span>
            </label>
            <input
              type="file"
              className="file-input file-input-primary w-full"
              onChange={handleImageChange}
            />
            {errors.images && (
              <span className="text-red-500">{errors.images.message}</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="button-primary w-full">
            পণ্য যোগ করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
