import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const AddCustomer = () => {
  return (
    <div className="p-4">
      {/* Breadcrumb and Action Button */}
      <div className="flex justify-between items-center mb-4">
        <DashboardBreadcrumb firstItem={"ক্রেতা"} secondItem={"ক্রেতা এন্ট্রি"}/>
        <button className="btn btn-primary flex items-center">
          <FaFolderOpen className="mr-2" />
          ক্রেতার তালিকা
        </button>
      </div>

      {/* Form Section */}
      <div className="card bg-white shadow-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">ক্রেতার আইডি</label>
            <input
              type="text"
              className="input input-sm input-bordered w-full"
              defaultValue="1"
            />
          </div>
          <div>
            <label className="block text-gray-700">নাম</label>
            <input
              type="text"
              className="input input-bordered w-full input-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">এনআইডি</label>
            <input
              type="text"
              className="input input-bordered w-full input-sm"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-gray-700">মোবাইল</label>
            <input
              type="text"
              className="input input-bordered w-full input-sm"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-gray-700">ইমেইল</label>
            <input
              type="email"
              className="input input-bordered w-full input-sm"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-gray-700">প্রারম্ভিক ব্যালেন্স</label>
            <input
              type="text"
              className="input input-bordered w-full input-sm"
              placeholder="Optional"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ছবি
            </label>
            <input
              type="file"
              name="image"
              className="file-input file-input-bordered file-input-sm mt-1 w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">ঠিকানা</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Optional"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">মন্তব্য</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Optional"
            ></textarea>
          </div>
        </div>

        {/* Form Buttons */}
        <div className="flex  mt-4 space-x-2">
          <button className="btn btn-secondary">সেভ</button>
          <button className="btn btn-primary">রিসেট</button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
