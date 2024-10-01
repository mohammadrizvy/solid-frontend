import React from "react";
import { GiHoneypot } from "react-icons/gi";
import { LuNut } from "react-icons/lu";
import { MdOilBarrel } from "react-icons/md";

const TopCategories = () => {
  return (
    <div>
      <div className="pt-6">
        <h1 className="text-center text-4xl mb-8  ">
          শীর্ষ বিক্রি
        </h1>
        <div className=" flex justify-center gap-10  ">
          {/* ------------------#-------------- */}
          <div className="card  w-[20%] h-50 bg-[#F9EEDD] ">
            <div className="card-body">
              <div className="card-title justify-center p-5">
                <GiHoneypot size={60} color="#D19E47" />
              </div>
              <p className="text-center text-3xl ">মধু</p>
            </div>
          </div>
          {/* ------------------#-------------- */}
          <div className="card  w-[20%] h-50 bg-[#F9EEDD] ">
            <div className="card-body">
              <div className="card-title justify-center p-5">
                <LuNut size={60}  color="#D19E47" />
              </div>
              <p className="text-center text-3xl ">বাদাম</p>
            </div>
          </div>
          {/* ------------------#-------------- */}
          <div className="card  w-[20%] h-50 bg-[#F9EEDD] ">
            <div className="card-body">
              <div className="card-title justify-center p-5">
                <MdOilBarrel size={60} color="#D19E47" />
              </div>
              <p className="text-center text-3xl ">তেল</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
