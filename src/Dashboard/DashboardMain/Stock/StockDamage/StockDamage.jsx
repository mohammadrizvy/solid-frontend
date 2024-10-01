import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';

const StockDamage = () => {
    return (
        <div className="p-4">
        {/* Breadcrumb and Action Button */}
        <div className="flex justify-between items-center mb-4">
          <DashboardBreadcrumb
          firstItem={"স্টক"}
          secondItem={"ড্যামেজ / লস্ট"}/>
          <button className="btn btn-outline btn-primary flex items-center">
            <FaClipboardList className="mr-2" />
            ড্যাঞ্জ/লন্ড তালিকা
          </button>
        </div>
  
        {/* Form Section */}
        <div className="card bg-white shadow-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">পণ্যের নাম</label>
              <select className="select select-bordered w-full">
                <option>----</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">কারণ</label>
              <input type="text" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-700">সংহোজন</label>
              <input type="text" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-700">বিয়োজন</label>
              <input type="text" className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-gray-700">তারিখ</label>
              <input type="date" className="input input-bordered w-full" />
            </div>
          </div>
  
          {/* Form Buttons */}
          <div className="flex justify-end mt-4 space-x-2">
            <button className="btn btn-sm px-6 btn-secondary">সেভ</button>
            <button className="btn btn-sm px-6 btn-primary ">রিসেট</button>
          </div>
        </div>
      </div>
    );
};

export default StockDamage;