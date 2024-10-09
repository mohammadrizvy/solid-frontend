import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import useCart from "../../Hooks/useCart";
import { IoHomeOutline } from "react-icons/io5";
import showToast from "../../Components/Toast/showToast";
import axios from "axios";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiBillLine, RiDeleteBin2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../Context/UserContext";

const CheckOut = () => {
  const { data: items = {}, refetch, isLoading } = useCart(); // Fixed isLoading typo
  const cartItems = items.patcs || []; // Use `patcs` if that's how it's named in your API
  const total = items.total || 0;
  const deliveryCharge = 150;
  const grandTotal = total + deliveryCharge;

  const { user } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const orderData = {
      cart_id: cartItems.map((item) => item.id), // Collect all item IDs
      ...data, // Spread the form data into orderData
    };
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/payment/checkout`,
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Order placed successfully");
        // Clear cart or redirect here
      }
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  const handleDeleteProduct = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/add/to/cart/remove/${itemId}/`
      );
      toast.success("Product deleted successfully");
      refetch();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const handleIncreaseQuantity = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/increase/${itemId}/`
      );
      showToast("Quantity increased", "success");
      refetch();
    } catch (error) {
      showToast("Failed to increase quantity", "error");
    }
  };

  const handleDecreaseQuantity = async (itemId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/cart/decrease/${itemId}/`
      );
      showToast("Quantity decreased", "success");
      refetch();
    } catch (error) {
      showToast("Failed to decrease quantity", "error");
    }
  };

  return (
    <div className="container mx-auto p-6 my-10">
      <Toaster />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side (Items and Address) */}
        <div className="lg:w-3/5 w-full bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">আপনার আইটেম</h2>
          {cartItems.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>নাম</th>
                    <th>পরিমাণ</th>
                    <th>মূল্য</th>
                    <th>আচরণ</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={`${import.meta.env.VITE_BASE_URL}${item.img}`}
                                alt={item.product_name}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.product_name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="flex gap-x-3 mt-3 items-center">
                        <FiMinus
                          className="cursor-pointer"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        />
                        <p>{item.qt}</p>
                        <FiPlus
                          className="cursor-pointer"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        />
                      </td>
                      <td>{item.price.toFixed(2)} টাকা</td>
                      <td>
                        <button
                          onClick={() => handleDeleteProduct(item.id)}
                          className="btn text-white mr-2 btn-primary btn-xs"
                        >
                          <RiDeleteBin2Line size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">Your cart is empty</p>
          )}

          {/* Billing Details */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <h3 className="text-lg flex items-center gap-2 font-semibold mb-2">
              <RiBillLine />
              Billing details
            </h3>
            <div className="grid gap-4">
              <div className="flex items-center gap-5">
                <input
                  {...register("firstName", { required: true })}
                  placeholder="Name"
                  defaultValue={user?.username}
                  className="input input-md w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
                />
                <input
                  {...register("phone_number", { required: true })}
                  placeholder="Phone Number"
                  className="input w-full input-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
                />
              </div>

              <div className="flex items-center gap-5">
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Email Address (Optional)"
                  className="input w-full input-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
                />
                <input
                  {...register("companyName")}
                  placeholder="Company Name (Optional)"
                  className="input w-full input-md rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
                />
              </div>
              <input
                {...register("shipping_address", { required: true })}
                placeholder="Address"
                className="input input-md h-16 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
              />
            </div>
          </form>
        </div>

        {/* Right side (Order Summary and Payment) */}
        <div className="lg:w-2/5 w-full bg-gray-100 h-full p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Price Breakdown */}
            <div className="mb-4 space-y-2">
              <p className="flex justify-between">
                <label>মোট আইটেম :</label>
                <span>{total} টাকা</span>
              </p>
              <p className="flex justify-between">
                <label>ডেলিভারি চার্জ :</label>
                <span>{deliveryCharge} টাকা</span>
              </p>
              <p className="font-semibold flex justify-between">
                <label>Grand Total:</label>
                <span>{grandTotal} টাকা</span>
              </p>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">পেমেন্ট পদ্ধতি</h3>
              <select
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19E47]"
                {...register("payment_method", { required: true })}
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Bkash">Bkash</option>
                <option value="Nogod">Nogod</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`btn bg-[#D19E47] mt-8 text-white w-full py-3 rounded-lg hover:bg-[#b87f33] transition duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
