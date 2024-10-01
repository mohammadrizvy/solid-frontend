import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { FaFolderOpen } from "react-icons/fa";

const AddPoint = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <DashboardBreadcrumb
          firstItem={"ক্রেতা"}
          secondItem={"এড ভ্যাজেন্স/লস পাট্স"}
        />
        <button className="btn btn-primary flex items-center">
          <FaFolderOpen className="mr-2" />
          পয়েন্ট তালিকা
        </button>
      </div>
      <div className="mt-4 bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center">
          <select className="input input-bordered w-full input-sm md:w-1/3">
            <option>----</option>
            {/* Add options here */}
          </select>
        </div>

        <div className="mt-4 space-y-4">
          {/* <div>
            <label className="block text-gray-700">কারণ</label>
            <input type="text" className="input input-bordered w-full input-sm" />
          </div> */}
          <div>
            <label className="block text-gray-700">সহযোগন</label>
            <input type="text" className="input input-bordered w-1/3 input-sm" />
          </div>
          <div>
            <label className="block text-gray-700">বিয়োজন</label>
            <input type="text" className="input input-bordered w-1/3 input-sm" />
          </div>
          <div>
            <label className="block text-gray-700">তারিখ</label>
            <input type="date" className="input input-bordered w-1/3 input-sm" />
          </div>
        </div>

        <div className="mt-4 flex gap-5">
          <button className=" btn btn-secondary px-4 btn-sm ">
            সেভ
          </button>
          <button className="btn btn-primary  px-2 btn-sm rounded-md">
            রিসেট
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPoint;
