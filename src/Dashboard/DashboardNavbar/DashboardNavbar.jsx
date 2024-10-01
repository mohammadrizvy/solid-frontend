import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../../Components/ui/ThemeToogle";
import { MdMenuOpen } from "react-icons/md";

const DashboardNavbar = ({ onDrawerToggle }) => {
  return (
    <div className="mx-6 bangla-regular">
      <div className="navbar rounded-b-xl sticky bg-base-200 ">
        <div className="navbar-start">
          
          <a className="btn btn-ghost text-2xl">Solid Honey-সলিড মধু</a>
          {/* Drawer toggle button for mobile view */}
          <label
            htmlFor="my-drawer-2"
            className=" cursor-pointer lg:hidden "
            onClick={onDrawerToggle}
          >
           <MdMenuOpen size={23} />

          </label>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <details>
                <summary className="text-base">‍ইনফো</summary>
                <ul className="p-2">
                  <li>
                    <a>Expiretion</a>
                  </li>
                  <li>
                    <a>Yet to come!</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>‍‍সেটিংস‍</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>‍ভাষা</summary>
                <ul className="p-2">
                  <li>
                    <a>English</a>
                  </li>
                  <li>
                    <a>বাংলা</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://epos.myexplore.net/uploads/photo2024-07-03-18-11-03_66853fd770860.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
