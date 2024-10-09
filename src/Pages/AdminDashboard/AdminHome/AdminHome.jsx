import React from "react";
import useProduct from "../../../Hooks/useProduct";

const AdminHome = () => {
  // Fetching products, replace with fake data
  const { data: products = [], refetch, isLoading, error } = useProduct();

  // Fake data for demonstration purposes
  const totalOrders = 567;
  const totalSales = "$45,120";
  const totalCustomers = 234;
  const totalTasks = 60;
  const tasksDone = 86; // as percentage
  const remainingTasks =
    totalTasks - Math.round((tasksDone / 100) * totalTasks);

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="stats shadow ">
        {/* Total Products */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Products</div>
          <div className="stat-value text-primary">{products.length} PIS</div>
          <div className="stat-desc">10% increase this month</div>
        </div>

        {/* Total Orders */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Orders</div>
          <div className="stat-value text-secondary">{totalOrders}</div>
          <div className="stat-desc">15% more than last month</div>
        </div>

        {/* Total Sales */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Sales</div>
          <div className="stat-value text-secondary">{totalSales}</div>
          <div className="stat-desc">25% increase from last month</div>
        </div>

        {/* Total Customers */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Customers</div>
          <div className="stat-value text-secondary">{totalCustomers}</div>
          <div className="stat-desc">10 new customers this week</div>
        </div>

        {/* Tasks Done */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Task"
                />
              </div>
            </div>
          </div>
          <div className="stat-value">{tasksDone}%</div>
          <div className="stat-title">Tasks Done</div>
          <div className="stat-desc text-secondary">
            {remainingTasks} tasks remaining
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
