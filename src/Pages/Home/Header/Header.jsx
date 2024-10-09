import React from "react";
import { GiHighGrass } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

const Header = () => {
  return (
    <div>
      {/* Image section */}
      <div className="w-full flex justify-center">
        <img
          src="/headerImage.png"
          alt="Header"
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>

      {/* Features section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 justify-center border-b-2 border-base-200 py-10 px-4">
        {/* ----- Feature 1 ----- */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-5 max-w-xs">
          <div className="bg-[#F9EEDD] rounded-full p-4">
            <GiHighGrass size={35} color="#D19E47" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">সম্পূর্ণ প্রাকৃতিক</p>
            <p className="text-sm mt-1">
              শতভাগ প্রাকৃতিক উপায়ে চাষ ও সংগ্রহকৃত!
            </p>
          </div>
        </div>
        {/* ----- Feature 2 ----- */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-5 max-w-xs">
          <div className="bg-[#F9EEDD] rounded-full p-4">
            <MdDashboard size={35} color="#D19E47" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">দামে সাশ্রয়ী</p>
            <p className="text-sm mt-1">তুলনামূলক সাশ্রয়ী গুনগতমান বিবেচনায়!</p>
          </div>
        </div>
        {/* ----- Feature 3 ----- */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-5 max-w-xs">
          <div className="bg-[#F9EEDD] rounded-full p-4">
            <GrPowerReset size={35} color="#D19E47" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">রিটার্ণ পলিসি</p>
            <p className="text-sm mt-1">অভিযোগসহ পন্য ফেরত দেয়ার সুযোগ!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
