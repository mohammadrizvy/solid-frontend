import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const CustomerPayment = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded p-6">
        {/* Breadcrumb */}
        <DashboardBreadcrumb
          firstItem={"ক্রেতা পেমেন্ট"}
          secondItem={"ক্রেতা পেমেন্ট গ্রহণ"}
        />

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ক্রেতার নাম
            </label>
            <select className="select select-sm select-bordered mt-1 w-full">
              <option disabled selected>
                ----
              </option>
              <option value="customer1">ক্রেতা 1</option>
              <option value="customer2">ক্রেতা 2</option>
              <option value="customer3">ক্রেতা 3</option>
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
              রেফারেন্স মেমো (Optional)
            </label>
            <input
              type="text"
              className="input input-sm input-bordered mt-1 w-full"
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
              ক্যাশ ব্যাক
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
              পেমেন্ট মাধ্যম
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
            সকল ক্রেতা পেমেন্ট
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerPayment;
