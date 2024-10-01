import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UserOrdersHistory = () => {
  const history = useLoaderData();
  const userOrders = history.orders || [];
  const [expandedOrders, setExpandedOrders] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Toggle order details visibility
  const toggleOrderDetails = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  // Filter by search term
  const filterOrdersBySearch = (order) => {
    if (searchTerm === "") return true;
    return order.order_id.includes(searchTerm);
  };

  // Filtered orders based on search term
  const filteredOrders = userOrders.filter(filterOrdersBySearch);

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  let serialNumber = indexOfFirstItem + 1;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Order History of {history.name}
      </h1>
      <Toaster />

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
          Total Orders: {filteredOrders.length}
        </span>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">SL</th>
              <th className="text-center">Order ID</th>
              <th className="text-center">Phone Number</th>
              <th className="text-center">Address</th>
              <th className="text-center">Total (incl. Delivery)</th>
              <th className="text-center">Order Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => {
              const totalWithDelivery = order.total + 150; // Adding 150 taka delivery charge

              return (
                <React.Fragment key={order.order_id}>
                  <tr>
                    <td className="text-center">{serialNumber++}</td>
                    <td>{order.order_id}</td>
                    <td>{order.phone_number || "N/A"}</td>
                    <td>{order.address}</td>
                    <td>{totalWithDelivery} টাকা</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td className="flex mt-3 gap-4 items-center">
                      <button
                        className="btn btn-sm text-white btn-success"
                        onClick={() => toggleOrderDetails(order.order_id)}
                      >
                        {expandedOrders[order.order_id] ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>
                  {expandedOrders[order.order_id] && (
                    <tr>
                      <td colSpan="7">
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">Order Details</h3>
                          <ul className="list-disc list-inside">
                            <li>
                              <span className="font-semibold">
                                {order.product_name}
                              </span>{" "}
                              - Quantity: {order.qt} - Price:{" "}
                              {order.product_price} টাকা - Total: {order.total}{" "}
                              টাকা
                            </li>
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

export default UserOrdersHistory;
