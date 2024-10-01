import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { FaFolderOpen } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";

const AddTransaction = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <DashboardBreadcrumb
          firstItem={"ক্রেতা"}
          secondItem={"ক্রেতা এন্ট্রি"}
        />
        <div className=" flex gap-4">
          <button className="btn btn-primary f ">
            <FaFolderOpen className="mr-2" />
            সকল লেনদেন সমূহ
          </button>
          <button className="btn btn-primary ">
            <FaFolderPlus className="mr-2" />
            এড ক্যাটেগরী
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">তারিখ</label>
            <input
              type="date"
              className="input input-bordered input-sm w-full"
              defaultValue="2024-08-26"
            />
          </div>

          <div>
            <label className="label">লেনদেন মাধ্যম</label>
            <select className="select select-sm select-bordered  w-full">
              <option>----</option>
            </select>
          </div>

          <div>
            <label className="label">ক্যাটেগরী</label>
            <select className="select select-bordered select-sm  w-full">
              <option>----</option>
            </select>
          </div>

          <div>
            <label className="label">বিবরণ</label>
            <input type="text" className="input input-bordered input-sm w-full" />
          </div>

          <div>
            <label className="label">ভাউচার নং (Optional)</label>
            <input type="text" className="input input-bordered input-sm w-full" />
          </div>

          <div>
            <label className="label">লেনদেন ধরন</label>
            <select className="select select-bordered select-sm  w-full">
              <option>----</option>
            </select>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" className="checkbox checkbox-info mr-2" />
          <span>Profit/Loss</span>
        </div>

         {/* Form Buttons */}
         <div className="flex justify-end mt-4 space-x-2">
          <button className="btn btn-secondary">সেভ</button>
          <button className="btn btn-primary">রিসেট</button>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
