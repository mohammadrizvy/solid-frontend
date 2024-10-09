import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useCategory from "../../../Hooks/useCategory";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const { data: productCategory = [], refetch, isLoading } = useCategory();
  const [selectedImages, setSelectedImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const [imagePreviews, setImagePreviews] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append form fields
      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);
      formData.append("rating", data.rating);

      // Append images
      if (selectedImages.image1)
        formData.append("image1", selectedImages.image1);
      if (selectedImages.image2)
        formData.append("image2", selectedImages.image2);
      if (selectedImages.image3)
        formData.append("image3", selectedImages.image3);
      if (selectedImages.image4)
        formData.append("image4", selectedImages.image4);

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
    const { name, files } = e.target;
    if (files && files[0]) {
      setSelectedImages((prevImages) => ({
        ...prevImages,
        [name]: files[0],
      }));
      setImagePreviews((prevPreviews) => ({
        ...prevPreviews,
        [name]: URL.createObjectURL(files[0]),
      }));
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-200 hover:shadow-xl rounded-lg mt-10">
      <Toaster />
      <h2 className="text-2xl font-bold mb-6 text-center">পণ্য যোগ করুন</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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

        </div>
          {/* Rating */}
          <div className="form-control items-center">
            <label className="label">
              <span className="label-text ">রেটিং</span>
            </label>
            <input
              type="number"
              step="0.1"
              max="5"
              placeholder="Enter rating (1 to 5)"
              className="input input-bordered w-2/4 "
              {...register("rating", { required: "Rating is required" })}
            />
            {errors.rating && (
              <span className="text-red-500">{errors.rating.message}</span>
            )}
          </div>
             {/* Description */}
        <div className="form-control">
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

        {/* Image Upload */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-6 justify-center">
          {/* Image 1 */}
          <div className="flex flex-col items-center">
            <label className="mb-2">Image 1 (Main)</label>
            <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden mb-2 flex items-center justify-center">
              {imagePreviews.image1 ? (
                <img
                  src={imagePreviews.image1}
                  alt="Preview 1"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <input
              type="file"
              name="image1"
              className="w-[85%]"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center">
            <label className="mb-2">Image 2</label>
            <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden mb-2 flex items-center justify-center">
              {imagePreviews.image2 ? (
                <img
                  src={imagePreviews.image2}
                  alt="Preview 2"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <input
              type="file"
              name="image2"
              className="w-[85%]"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Image 3 */}
          <div className="flex flex-col items-center">
            <label className="mb-2">Image 3</label>
            <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden mb-2 flex items-center justify-center">
              {imagePreviews.image3 ? (
                <img
                  src={imagePreviews.image3}
                  alt="Preview 3"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <input
              type="file"
              name="image3"
              className="w-[85%]"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Image 4 */}
          <div className="flex flex-col items-center">
            <label className="mb-2">Image 4</label>
            <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden mb-2 flex items-center justify-center">
              {imagePreviews.image4 ? (
                <img
                  src={imagePreviews.image4}
                  alt="Preview 4"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-500">No Image</span>
              )}
            </div>
            <input
              type="file"
              name="image4"
              className="w-[85%]"
              accept="image/*"
              onChange={handleImageChange}
            />
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
