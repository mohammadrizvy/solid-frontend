import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import useCategory from "../../../Hooks/useCategory";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const admin = true;
  const user = false;
  const posUser = true;
  // Example user state, change it according to your actual logic

  const { data: cartData = [], refetch, isLoading } = useCart();
  const cartItems = cartData.patcs || [];

  const { data: categories = [] } = useCategory();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 px-4  border-b-2  rounded-md sticky top-0 z-50">
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
                    {" "}
                    {/* Ensures the container is wide enough */}
                    <li className="py-1 whitespace-nowrap">
                      {" "}
                      {/* Ensures text doesn't wrap */}
                      <p>সুন্দরবনের মধু</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>সরিষা ফুলের মধু</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>কালোজিরা ফুলের মধু</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>লিচু ফুলের মধু</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>১০০ গ্রাম মধু কাঁচের বোতল</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>কালোজিরার তেল</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>সরিষার তেল</p>
                    </li>
                    <li className="py-1 whitespace-nowrap">
                      <p>কালোজিরা</p>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/">ব্লগ</Link>
              </li>
              <li>
                <Link to="/">টার্মস এন্ড কন্ডিশন</Link>
              </li>
              <li>
                <Link to="/">যোগাযোগ</Link>
              </li>
              {admin && (
                <li>
                  <Link to="/dashboard">ড্যাশবোর্ড</Link>
                </li>
              )}
              {posUser && (
                <li>
                  <Link to="/pos">POS</Link>
                </li>
              )}
            </ul>
          )}
        </div>
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-10 h-10 md:w-10 md:h-10"
            src="/Solid-Honey-Logo-for-daraz-100x100.png"
            alt="myLogo"
          />
          <span className="text-xl font-semibold">Solid Honey-মধু</span>
        </Link>
      </div>

      {/* Center Section for Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-10">
          <li>
            <Link to="/about-us">আমাদের সম্পর্কে</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <Link to={"/allProducts"}>সকল পন্য</Link>
              </summary>
              <ul className="min-w-max  text-center space-y-2">
                {/* Ensures the container is wide enough */}
                {categories.map((category, index) => (
                  <li key={index} className="p whitespace-nowrap">
                    {/* Ensures text doesn't wrap */}
                    <Link to={"/allProducts"}>
                      <p>{category.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <Link to="/">ব্লগ</Link>
          </li>
          <li>
            <Link to="/">টার্মস এন্ড কন্ডিশন</Link>
          </li>
          <li>
            <Link to="/">যোগাযোগ</Link>
          </li>
          {admin && (
            <li>
              <Link to="/admin-dashboard">ড্যাশবোর্ড</Link>
            </li>
          )}
          {posUser && (
            <li>
              <Link to="/dashboard">POS</Link>
            </li>
          )}
        </ul>
      </div>

      {/* End Section for User Actions */}
      <div className="navbar-end">
        <Link to="/carts" className="btn btn-ghost">
          <p></p>
          <div className="flex">
            <IoBagHandleOutline color="#D19E47" size={26} />
            {/* Only show the badge if data exists and its length is greater than 0 */}
            {cartItems && cartItems.length > 0 && (
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
                <p className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </p>
              </li>
              <Link to="/dashboard">
                <li>
                  <p>Dashboard</p>
                </li>
              </Link>
              <li>
                <p>Settings</p>
              </li>
              <li>
                <p>Logout</p>
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
