import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserDetails = () => {
  const userInfo = useLoaderData();

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: userInfo.name,
      email: userInfo.email,
      role: userInfo.role,
    },
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/user/details/${userInfo.id}`,
        data
      );
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Edit User Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
            readOnly
              type="email"
              {...register("email", {
                
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter Email"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              {...register("role")}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="shss_admin">shss_admin</option>
              <option value="shss_user">shss_user</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
