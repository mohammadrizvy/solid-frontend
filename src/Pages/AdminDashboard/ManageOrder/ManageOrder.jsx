import React, { useState } from "react";
import useOrders from "../../../Hooks/useOrders";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ManageOrder = () => {
  const { data: orders = [], refetch, isLoading } = useOrders();
  const [expandedOrders, setExpandedOrders] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items per page

  // Toggle order details visibility
  const toggleOrderDetails = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId], 
    }));
  };

  // Handle Accept/Deny
  const handleAcceptOrder = async (orderId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/order/accept/${orderId}`
      );
      toast.success("Order has been accepted");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Failed to accept the order");
    }
  };

  const handleDenyOrder = async (orderId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/order/deny/${orderId}`
      );
      refetch();
      toast.success("Order Denied Successfully");
    } catch (err) {
      toast.error("Failed to deny the order");
    }
  };

  // Filter orders by selected month and year
  const filterOrdersByMonth = (order) => {
    const orderDate = new Date(order.date);
    const orderMonth = orderDate.getMonth() + 1; // JavaScript months are zero-indexed
    const orderYear = orderDate.getFullYear();
    return (
      (selectedMonth === "" || orderMonth === parseInt(selectedMonth)) &&
      (selectedYear === "" || orderYear === parseInt(selectedYear))
    );
  };

  // Filter by search term
  const filterOrdersBySearch = (order) => {
    if (searchTerm === "") return true;
    return order.order_id.includes(searchTerm);
  };

  // Filter and group orders
  const filteredOrders = orders.flatMap((customerOrder) =>
    customerOrder.orders
      .filter(
        (order) =>
          !order.accepted &&
          !order.deny &&
          !order.status &&
          filterOrdersByMonth(order) &&
          filterOrdersBySearch(order)
      )
      .reduce((groupedOrders, order) => {
        const existingOrder = groupedOrders.find(
          (o) => o.order_id === order.order_id
        );
        if (existingOrder) {
          existingOrder.items.push(order);
        } else {
          groupedOrders.push({
            ...order,
            items: [order],
            name: customerOrder.name,
          });
        }
        return groupedOrders;
      }, [])
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  let serialNumber = indexOfFirstItem + 1;

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-semibold mb-4">Manage Orders</h1>
      <Toaster />

      {/* Month and Year Filter */}
      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <select
          className="select select-bordered"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {[...Array(12).keys()].map((month) => (
            <option key={month + 1} value={month + 1}>
              {new Date(0, month).toLocaleString("default", {
                month: "long",
              })}
            </option>
          ))}
        </select>

        <select
          className="select select-bordered"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>

        <button
          className="btn btn-secondary"
          onClick={() => {
            setSelectedMonth("");
            setSelectedYear("");
          }}
        >
          Reset Filters
        </button>
      </div>

      {/* Search by Order ID */}
      <div className="mb-4">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Search by Order ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <span className="text-lg font-semibold">
          Total Orders : {filteredOrders.length}
        </span>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="hidden md:table-row">
              <th className="text-center">SL</th>
              <th className="text-center">গ্রাহকের নাম</th>
              <th className="text-center">অর্ডার আইডি</th>
              <th className="text-center">ফোন নম্বর</th>
              <th style={{ minWidth: "200px" }} className="text-center">
                ঠিকানা
              </th>
              <th className="text-center">মোট (incl. Delivery)</th>
              <th className="text-center">পেমেন্ট পদ্ধতি</th>
              <th className="text-center">অর্ডারের তারিখ</th>
              <th className="text-center">কর্ম</th>
            </tr>
          </thead>
          <tbody className="max-w-8xl">
            {currentOrders.map((groupedOrder) => {
              const totalCost = groupedOrder.items.reduce(
                (total, item) => total + item.total,
                0
              );
              const totalWithDelivery = totalCost + 150; // Adding 150 taka delivery charge

              return (
                <React.Fragment key={groupedOrder.order_id}>
                  <tr className="block md:table-row">
                    <td className="text-center">{serialNumber++}</td>
                    <td>{groupedOrder.name || "N/A"}</td>
                    <td>{groupedOrder.order_id}</td>
                    <td>{groupedOrder.phone_number || "N/A"}</td>
                    <td>{groupedOrder.address}</td>
                    <td>{totalWithDelivery} টাকা</td>
                    <td>{groupedOrder.payment_method}</td>
                    <td>{new Date(groupedOrder.date).toLocaleDateString()}</td>
                    <td className="flex mt-3 gap-4 items-center">
                      <button
                        className="btn btn-xs text-white btn-primary"
                        onClick={() => handleAcceptOrder(groupedOrder.order_id)}
                      >
                        Accept
                      </button>
                      <button
                        className="btn btn-xs btn-error text-white"
                        onClick={() => handleDenyOrder(groupedOrder.order_id)}
                      >
                        Deny
                      </button>
                      <button
                        className="btn btn-xs text-white btn-success"
                        onClick={() =>
                          toggleOrderDetails(groupedOrder.order_id)
                        }
                      >
                        {expandedOrders[groupedOrder.order_id]
                          ? "Hide"
                          : "View"}
                      </button>
                    </td>
                  </tr>
                  {expandedOrders[groupedOrder.order_id] && (
                    <tr className="block md:table-row">
                      <td colSpan="9">
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">Order Details</h3>
                          <ul className="list-disc list-inside">
                            {groupedOrder.items.map((item, index) => (
                              <li key={index}>
                                <span className="font-semibold">
                                  {item.product_name}
                                </span>{" "}
                                - Quantity: {item.qt} - Price:{" "}
                                {item.product_price} টাকা - Total: {item.total}{" "}
                                টাকা
                              </li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          className="btn btn-secondary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageOrder;
