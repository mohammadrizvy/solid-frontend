import React from 'react';
import { GiHighGrass } from 'react-icons/gi';
import { GrPowerReset } from 'react-icons/gr';
import { MdDashboard } from 'react-icons/md';

const Header = () => {
    return (
      <div className="">
        <div className="w-full flex justify-center">
          <img
            src="/headerImage.png"
            alt="Header"
            className="w-full max-w-7xl h-auto object-cover"
          />
        </div>

        <div className="my-10 flex gap-5 justify-center border-b-2 border-base-200 py-10">
          {/* -----1-------- */}
          <div className="flex items-center gap-5">
            <div className="">
              <p className="bg-[#F9EEDD] rounded-full p-4">
                <GiHighGrass size={35} color="#D19E47" />
              </p>
            </div>
            <div className="">
              <p className="font-semibold">সম্পূর্ণ প্রাকৃতিক</p>
              <p className="text-base">
                শতভাগ প্রাকৃতিক উপায়ে চাষ ও সংগ্রহকৃত!
              </p>
            </div>
          </div>
          {/* -----2-------- */}
          <div className="flex items-center gap-5">
            <div className="">
              <p className="bg-[#F9EEDD] rounded-full p-4">
                <MdDashboard size={35} color="#D19E47" />
              </p>
            </div>
            <div className="">
              <p className="font-semibold">দামে সাশ্রয়ী</p>
              <p className="text-base">তুলনামূলক সাশ্রয়ী গুনগতমান বিবেচনায়!</p>
            </div>
          </div>
          {/* -----3-------- */}
          <div className="flex items-center gap-5">
            <div className="">
              <p className="bg-[#F9EEDD] rounded-full p-4">
                <GrPowerReset size={35} color="#D19E47" />
              </p>
            </div>
            <div className="">
              <p className="font-semibold">রিটার্ণ পলিসি</p>
              <p className="text-base">অভিযোগসহ পন্য ফেরত দেয়ার সুযোগ!</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;
