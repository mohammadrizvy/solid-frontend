import React from "react";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const TransationList = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <DashboardBreadcrumb
          firstItem={"ক্রেতা"}
          secondItem={"সকল লেনদেন সমূহ"}
        />

        <button className="btn btn-primary f ">
          <FaPlusCircle className="mr-2" />
          সকল লেনদেন সমূহ
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <div className="form-control mb-4">
          <input
            type="text"
            placeholder="Search....."
            className="input input-bordered w-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <a href="#" className=" font-semibold ">
            আপায়ন (1)
          </a>
          <a href="#" className=" font-semibold ">
            ট্রেড লাইসেন্স (1)
          </a>
          <a href="#" className=" font-semibold ">
            বিদ্যুৎ বিল (1)
          </a>
          <a href="#" className=" font-semibold ">
            ওয়াইফাই (1)
          </a>
          <a href="#" className=" font-semibold ">
            দোকান ভাড়া (1)
          </a>
          <a href="#" className=" font-semibold ">
            টাকা নেওয়া (1)
          </a>
          <a href="#" className=" font-semibold ">
            নগদ (2)
          </a>
        </div>
      </div>
    </div>
  );
};

export default TransationList;
