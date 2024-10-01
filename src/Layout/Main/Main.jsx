import React from "react";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
