// src/components/Navbar/Navbar.js

import React, { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useCategory from "../../../Hooks/useCategory";
import { UserContext } from "../../../Context/UserContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext); // Access user and setUser from context

  const { data: cartData = [] } = useCart();
  const cartItems = cartData.patcs || [];

  const { data: categories = [] } = useCategory();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Clear user context
  };

  return (
    <div className="navbar bg-base-100 px-4 border-b-2 rounded-md sticky top-0 z-50">
      {/* Start Section for Logo and Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Menu Icon */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Mobile Menu Content */}
          {isMobileMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/about-us">আমাদের সম্পর্কে</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    <Link to={"/allProducts"}>সকল পন্য</Link>
                  </summary>
                  <ul className="min-w-max px-6 py-4 text-center space-y-2">
                    {categories.map((category, index) => (
                      <li key={index} className="py-1 whitespace-nowrap">
                        <p>{category.name}</p>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              {user && user.role === "shss_admin" && (
                <li>
                  <Link to="/admin-dashboard">ড্যাশবোর্ড</Link>
                </li>
              )}
            </ul>
          )}
        </div>
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-10 h-10"
            src="/Solid-Honey-Logo-for-daraz-100x100.png"
            alt="Logo"
          />
          <span className="text-xl font-semibold">Solid Honey-মধু</span>
        </Link>
      </div>

      {/* Center Section for Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-10">
          {/* Dropdown Container */}
          <li className="relative group">
            {/* Main Link with an arrow to indicate dropdown */}
            <div className="cursor-pointer flex items-center space-x-1">
              <Link to="/about-us" className="flex items-center">
                আমাদের সম্পর্কে
              </Link>
              <svg
                className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-3 mt-8 z-10 w-48">
              <li>
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  অর্জন
                </Link>
              </li>
              <li>
                <Link
                  to="/media-coverage"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  মিডিয়া কভারেজ
                </Link>
              </li>
              <li>
                <Link
                  to="/honey-farm"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  মৌ খামার
                </Link>
              </li>
              <li>
                <Link
                  to="/fair-campaign"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  মেলা/ক্যাম্পেইন
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  ছবি সমগ্র
                </Link>
              </li>
              <li>
                <Link
                  to="/update-notice"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                >
                  নোটিশ/নিউজ
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/allProducts">সকল পন্য</Link>
          </li>
          <li>
            <Link to="/terms">টার্মস এন্ড কন্ডিশন</Link>
          </li>
          <li>
            <Link to="/contact">যোগাযোগ</Link>
          </li>
          {user && user.role === "shss_admin" && (
            <li>
              <Link to="/admin-dashboard">ড্যাশবোর্ড</Link>
            </li>
          )}
        </ul>
      </div>

      {/* End Section for User Actions */}
      <div className="navbar-end flex items-center">
        {user && (
          <span className="mr-4 text-sm font-medium">{user.username}</span>
        )}
        <Link to="/carts" className="btn btn-ghost">
          <div className="flex">
            <IoBagHandleOutline color="#D19E47" size={26} />
            {cartItems.length > 0 && (
              <div className="text-[#D19E47]">{cartItems.length}</div>
            )}
          </div>
        </Link>
        {user ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <FaRegUser size={24} />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-ghost">
            <CiLogin size={24} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
