import React from 'react';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const StaffPayment = () => {
    return (
        <div className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <DashboardBreadcrumb
            firstItem={"পেমেন্ট"}
            secondItem={"এড কর্মী বেতন"}
          ></DashboardBreadcrumb>
          <button className="btn  btn-primary">
            <AiOutlineFolderOpen size={24} className="mr-2" />
            বেতন পেমেন্ট তালিকা
          </button>
        </div>
  
        <div className="bg-white shadow-md rounded p-6 mt-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Employee ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                কর্মী আইডি
              </label>
              <select className="select select-bordered w-full mt-1">
                <option value="" disabled selected>
                  ----
                </option>
                {/* Add options here */}
              </select>
            </div>
  
            {/* Balance */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ব্যালেন্স
              </label>
              <input
                type="text"
                className="input input-bordered w-full mt-1"
                disabled
              />
            </div>
  
            {/* Monthly Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                মাসিক বেতন এন্ট্রি
              </label>
              <input type="text" className="input input-bordered w-full mt-1" />
              <span className="text-xs text-red-500">
                Must enter once per month. No need to make repeated entries.
              </span>
            </div>
  
            {/* Cash Paid */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                নগদ প্রদান
              </label>
              <input type="text" className="input input-bordered w-full mt-1" />
            </div>
  
            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                তারিখ
              </label>
              <input
                type="date"
                className="input input-bordered w-full mt-1"
                defaultValue="2024-08-24"
              />
            </div>
  
            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                পেমেন্ট মাধ্যম
              </label>
              <select className="select select-bordered w-full mt-1">
                <option value="" disabled selected>
                  Selesct
                </option>
                <option value="">Cash</option>
                <option value="">Bkash</option>
                <option value="">Nagad</option>
                <option value="">Bank</option>
                {/* Add options here */}
              </select>
            </div>
          </form>
  
          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <div>
              <button className="btn btn-neutral btn-sm">সেভ</button>
              <button className="btn btn-primary btn-sm ml-2">রিসেট</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default StaffPayment;