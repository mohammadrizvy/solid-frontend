import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useOrders from "../../../../Hooks/useOrders";

const DeniedPage = () => {
  const { data: orders = [], refetch , isLoading } = useOrders();
  const [expandedOrders, setExpandedOrders] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const itemsPerPage = 20; // Adjust the number of items per page as needed

  // Toggle order details visibility
  const toggleOrderDetails = (orderId) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  // Handle Reinstate Order
  const handleReinstateOrder = async (orderId) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/order/reinstate/${orderId}`
      );
      toast.success("Order has been reinstated");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Failed to reinstate the order");
    }
  };

  // Filter and group denied orders with search functionality
  const filteredOrders = orders.flatMap((customerOrder) =>
    customerOrder.orders
      .filter(
        (order) => order.deny && order.order_id.includes(searchTerm) // Filter by denied orders and search term
      )
      .reduce((groupedOrders, order) => {
        const existingOrder = groupedOrders.find(
          (o) => o.order_id === order.order_id
        );
        if (existingOrder) {
          existingOrder.items.push(order);
        } else {
          // Ensure customer name is passed along with the order
          groupedOrders.push({
            ...order,
            items: [order],
            customer_name: customerOrder.name,
          });
        }
        return groupedOrders;
      }, [])
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  // Get current orders based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  let serialNumber = indexOfFirstItem + 1; // Initialize serial number

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Denied Orders</h1>
      <Toaster />

      {/* Search by Order ID */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Order ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="mb-4">
        <span className="text-lg font-semibold">
          Total Denied Orders : {filteredOrders.length}
        </span>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th className="text-center">SL</th>
              <th className="text-center">গ্রাহকের নাম</th>
              <th className="text-center">অর্ডার আইডি</th>
              <th className="text-center">ফোন নম্বর</th>
              <th className="text-center">ঠিকানা</th>
              <th className="text-center">মোট (incl. Delivery)</th>
              <th className="text-center">অর্ডারের তারিখ</th>
              <th className="text-center">কর্ম</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((groupedOrder) => {
              const totalCost = groupedOrder.items.reduce(
                (total, item) => total + item.total,
                0
              );
              const totalWithDelivery = totalCost + 150; // Adding delivery charge

              return (
                <React.Fragment key={groupedOrder.order_id}>
                  <tr>
                    <td className="text-center">{serialNumber++}</td>
                    <td>{groupedOrder.customer_name || "N/A"}</td>
                    <td>{groupedOrder.order_id}</td>
                    <td>{groupedOrder.phone_number || "N/A"}</td>
                    <td>{groupedOrder.address}</td>
                    <td>{totalWithDelivery} টাকা</td>
                    <td>{new Date(groupedOrder.date).toLocaleDateString()}</td>
                    <td className="join flex mt-3 items-center">
                      <button
                        className="btn join-item btn-xs text-white btn-primary"
                        onClick={() =>
                          toggleOrderDetails(groupedOrder.order_id)
                        }
                      >
                        {expandedOrders[groupedOrder.order_id]
                          ? "Hide"
                          : "View"}
                      </button>
                      <button
                        className="btn btn-xs join-item btn-secondary"
                        onClick={() =>
                          handleReinstateOrder(groupedOrder.order_id)
                        }
                      >
                        Reinstate
                      </button>
                    </td>
                  </tr>
                  {expandedOrders[groupedOrder.order_id] && (
                    <tr>
                      <td colSpan="8" className="">
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

export default DeniedPage;
