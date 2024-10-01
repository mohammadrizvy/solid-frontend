import React from 'react';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';
import { AiOutlineFolderOpen } from 'react-icons/ai';

const SupplierPayment = () => {
    return (
        <div className="container mx-auto p-6">
        <div className="bg-white shadow-md rounded p-6">
          {/* Breadcrumb */}
          <DashboardBreadcrumb
            firstItem={"সরবরাহকারী পেমেন্ট"}
            secondItem={"এড সরবরাহকারী পেমেন্ট"}
          />
  
          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                সরবরাহকারী
              </label>
              <select className="select select-sm select-bordered mt-1 w-full">
                <option disabled selected>
                  সরবরাহকারী সিলেক্ট করুন
                </option>
                <option value="supplier1">সরবরাহকারী 1</option>
                <option value="supplier2">সরবরাহকারী 2</option>
                <option value="supplier3">সরবরাহকারী 3</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ব্যালেন্স
              </label>
              <input
                type="text"
                className="input input-sm input-bordered mt-1 w-full"
                disabled
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                নগদ প্রদান
              </label>
              <input
                type="number"
                className="input input-sm input-bordered mt-1 w-full"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ছাড়
              </label>
              <input
                type="number"
                className="input input-sm input-bordered mt-1 w-full"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                তারিখ
              </label>
              <input
                type="date"
                className="input input-sm input-bordered mt-1 w-full"
                defaultValue="2024-08-24"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                লেনদেন মাধ্যম
              </label>
              <select className="select select-sm select-bordered mt-1 w-full">
                <option disabled selected>
                  ----
                </option>
                <option value="bank">ব্যাংক</option>
                <option value="cash">নগদ</option>
              </select>
            </div>
  
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                মন্তব্য
              </label>
              <textarea
                className="textarea textarea-bordered textarea-sm mt-1 w-full"
                rows="3"
              ></textarea>
            </div>
          </div>
  
          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <div>
              <button className="btn btn-sm btn-success">সেভ</button>
              <button className="btn btn-sm btn-secondary ml-2">রিসেট</button>
            </div>
  
            <button className="btn btn-sm btn-primary">
              সকল সরবরাহকারী পেমেন্ট
            </button>
          </div>
        </div>
      </div>
    );
};

export default SupplierPayment;