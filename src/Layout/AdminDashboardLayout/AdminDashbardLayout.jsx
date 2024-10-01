import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { FaTruckFast, FaUsersGear } from "react-icons/fa6";
import { GoReport } from "react-icons/go";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { LuBaggageClaim, LuLayoutDashboard } from "react-icons/lu";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; // Icons for toggling submenu

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOrdersSubmenuOpen, setIsOrdersSubmenuOpen] = useState(false);
  const navigate = useNavigate();

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
    <div className="flex w-full min-h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300  ease-in-out ${
          isSidebarOpen ? "w-[15%]" : "w-0"
        } lg:w-[15%] fixed inset-y-0 z-10`}
        style={{ minWidth: isSidebarOpen ? "180px" : "0" }} // Adjust the minWidth for sidebar
      >
        <div className="h-full p-4 flex flex-col justify-between">
          {/* Logo */}
          <div className="sticky top-0 bg-gray-800 z-20">
            <Link to={"/admin-dashboard"}>
              <img
                className="w-16 lg:w-[80px] mb-4 mx-auto"
                src="https://i.ibb.co/jhD85Kp/logo2024-07-06-21-35-31-66896443c7133-1-removebg-preview.png"
                alt="Logo"
              />
            </Link>

            {/* Sidebar menu */}
            <ul className="space-y-4">
              {/* Sidebar links */}
              {[
                {
                  to: "/admin-dashboard",
                  icon: <LuLayoutDashboard size={20} />,
                  label: "Dashboard",
                },
                {
                  to: "/admin-dashboard/add-products",
                  icon: <MdProductionQuantityLimits size={20} />,
                  label: "Add Product",
                },
                {
                  to: "/admin-dashboard/manage-products",
                  icon: <LuBaggageClaim size={20} />,
                  label: "Manage Products",
                },
                {
                  to: "/admin-dashboard/add-category",
                  icon: <CiViewList size={20} />,
                  label: "Add Category",
                },
                {
                  to: "/admin-dashboard/users",
                  icon: <FaUsersGear size={20} />,
                  label: "Manage Users",
                },
                {
                  label: "Manage Orders",
                  icon: <FaTruckFast size={20} />,
                  onClick: () => {
                    navigate("/admin-dashboard/orders");
                    setIsOrdersSubmenuOpen(!isOrdersSubmenuOpen);
                  },
                  submenu: [
                    {
                      to: "pending",
                      label: "Pending Orders",
                    },
                    {
                      to: "delivered",
                      label: "Delivered Orders",
                    },
                    {
                      to: "denied",
                      label: "Denied Orders",
                    },
                  ],
                },
                {
                  to: "/admin-dashboard/reports",
                  icon: <GoReport />,
                  label: "Reports & Statistics",
                },
                {
                  to: "/admin-dashboard/settings",
                  icon: <IoSettingsOutline size={20} />,
                  label: "Settings",
                },
                { to: "/", icon: <IoHomeOutline size={20} />, label: "Home" },
              ].map(({ to, icon, label, onClick, submenu }, index) => (
                <li key={index} className="relative">
                  {submenu ? (
                    <>
                      <button
                        onClick={onClick}
                        className="flex items-center justify-between w-full p-2 hover:bg-gray-700 rounded-lg transition duration-200"
                      >
                        <div className="flex items-center">
                          {icon && <span className="mr-2">{icon}</span>}
                          {label}
                        </div>
                        {isOrdersSubmenuOpen ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </button>
                      {isOrdersSubmenuOpen && (
                        <ul className="pl-6">
                          {submenu.map(({ to, label }, subIndex) => (
                            <li key={`${to}-${subIndex}`} className="py-1">
                              <Link
                                to={to}
                                className="text-sm hover:text-[#D19E47] transition-colors"
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={to}
                      className="flex items-center p-2 hover:bg-gray-700 rounded-lg transition duration-200"
                    >
                      {icon && <span className="mr-2">{icon}</span>}
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-grow bg-gray-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "lg:ml-[15%]" : "lg:ml-0"
        } p-6 w-full`}
      >
        <div className="lg:hidden mb-4">
          <button
            className="text-white bg-gray-800 p-2 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>

        {/* Table Overflow Handling */}
        <div className="overflow-x-auto w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
