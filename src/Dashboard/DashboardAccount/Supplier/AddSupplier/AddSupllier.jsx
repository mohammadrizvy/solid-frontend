import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { FaFolderOpen } from "react-icons/fa";

const AddSupllier = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <DashboardBreadcrumb
          firstItem="সরবরাহকারী"
          secondItem="সরবরাহকারী এন্ট্রি"
        />

        <button className="btn btn-primary flex items-center">
          <FaFolderOpen className="mr-2" />
          সরবরাহকারী তালিকা
        </button>
      </div>
      <div className="mt-4 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">সরবরাহকারী</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">যোগাযোগকারী ব্যক্তি</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">ঠিকানা</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">মোবাইল</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">প্রারম্ভিক ব্যালেন্স</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
        </div>

        <div className="flex  mt-4 space-x-2">
          <button className="btn btn-secondary">সেভ</button>
          <button className="btn btn-primary">রিসেট</button>
        </div>
      </div>
    </div>
  );
};

export default AddSupllier;
