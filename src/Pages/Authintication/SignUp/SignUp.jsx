import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/singup`,
        data
      );
      console.log("Success:", response.data); // Handle success, like redirecting or displaying a success message
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      ); // Handle error appropriately
    }
  };

  return (
    <div className="">
      <section className="relative py-4 sm:py-16 lg:py-14">
        <div className="absolute inset-0"></div>

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
                  <div>
                    <label
                      className="text-base font-medium text-gray-900"
                    >
                      First & Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        {...register("name", { required: true })}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-base font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        {...register("password", { required: true })}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#D19E47] border-transparent rounded-md focus:outline-none"
                    >
                      Sign up
                    </button>
                  </div>
                  <p className="mt-2 gap-2 text-center text-base text-gray-600">
                    Already joined?
                    <Link to="/login">
                      <span
                        title=""
                        className="text-[#D19E47] transition-all duration-200 hover:underline"
                      >
                        Sign in now
                      </span>
                    </Link>
                  </p>
                </div>
              </form>

              <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                This site is protected by reCAPTCHA and the Google
                <a
                  href="#"
                  title=""
                  className="text-[#D19E47] transition-all duration-200 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                &
                <a
                  href="#"
                  title=""
                  className="text-[#D19E47] transition-all duration-200 hover:underline"
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
