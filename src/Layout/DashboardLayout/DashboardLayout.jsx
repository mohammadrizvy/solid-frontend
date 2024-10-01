import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../Dashboard/DashboardNavbar/DashboardNavbar";
import DashboardItems from "../../Components/DashboardItems/DashboardItems";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="drawer drawer-mobile w-full lg:drawer-open bangla-regular">
      {/* Drawer toggle input */}
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main content area */}
      <div className="drawer-content flex flex-col min-h-screen bg-white">
        <DashboardNavbar />
        <div className="p-4 lg:p-6 flex-grow">
          <Outlet />
        </div>
      </div>

      {/* Sidebar / Drawer */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content w-64 lg:w-72 p-4 pb-52 ">
          <img
            className="w-24 lg:w-[100px] mb-4 mx-auto"
            src="https://i.ibb.co/jhD85Kp/logo2024-07-06-21-35-31-66896443c7133-1-removebg-preview.png"
            alt="Logo"
          />
          <DashboardItems />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
