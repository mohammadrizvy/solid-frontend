// src/components/SignUp.js

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { UserContext } from "../../../Context/UserContext";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Exclude confirmPassword from data sent to backend
      const { confirmPassword, ...signupData } = data;

      // Make API call to the signup endpoint
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/signup/`,
        signupData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success: Store tokens directly
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);

     localStorage.setItem(
       "user",
       JSON.stringify({
         user_id: response.data.user_id,
         username: response.data.name,
         email: response.data.email,
         role: response.data.role, // Include role
       })
     );

     // Set user data in context
     setUser({
       user_id: response.data.user_id,
       username: response.data.name,
       email: response.data.email,
       role: response.data.role, // Include role
     });

       const userRole = response.data.role;

       if (userRole === "shss_user") {
         navigate("/");
       } else if (userRole === "shss_admin") {
         navigate("/admin-dashboard");
       } else if (userRole === "sh_superuser") {
         navigate("/dashboard");
       } else {
         navigate("/");
       } // Redirect to dashboard or desired page
    } catch (error) {
      const message = error.response?.data?.fail || "Sign-up failed";
      toast.error(message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <section className="relative py-4 sm:py-16 lg:py-14">
        <div className="absolute inset-0"></div>
        <Toaster />
        <div className="relative max-w-lg px-4 mx-auto sm:px-0">
          <div className="overflow-hidden bg-base-100 rounded-md shadow-xl">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Create an account
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Full Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.name ? "border-red-500" : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email Address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.email ? "border-red-500" : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.password ? "border-red-500" : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message:
                              "Password must contain letters and numbers",
                          },
                        })}
                      />
                      <button
                        type="button"
                        className="absolute right-2 mr-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        onClick={togglePasswordVisibility}
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <IoIosEyeOff size={25} />
                        ) : (
                          <IoMdEye size={25} />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Confirm Password
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className={`block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border ${
                          errors.confirmPassword
                            ? "border-red-500"
                            : "border-gray-200"
                        } rounded-md focus:outline-none focus:border-blue-600 caret-blue-600`}
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                        })}
                      />
                      <button
                        type="button"
                        className="absolute right-2 mr-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                        onClick={togglePasswordVisibility}
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <IoIosEyeOff size={25} />
                        ) : (
                          <IoMdEye size={25} />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-transparent rounded-md focus:outline-none"
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Sign In Link */}
                  <p className="mt-2 text-center text-base text-gray-600">
                    Already have an account?
                    <Link to="/login">
                      <span className="text-blue-600 transition-all duration-200 hover:underline ml-1">
                        Sign in now
                      </span>
                    </Link>
                  </p>
                </div>
              </form>

              {/* Privacy Policy and Terms */}
              <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                By signing up, you agree to our
                <a
                  href="/privacy-policy"
                  className="text-blue-600 transition-all duration-200 hover:underline ml-1"
                >
                  Privacy Policy
                </a>
                &
                <a
                  href="/terms"
                  className="text-blue-600 transition-all duration-200 hover:underline ml-1"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
