import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const BalanceTransfer = () => {
  return (
    <div className="p-4">
      <DashboardBreadcrumb
        firstItem="ড্যাশবোর্ড"
        secondItem="ব্যালেন্স ট্রান্সফার"
      />

      <div className="mt-4 bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">লেনদেন মাধ্যম</label>
            <div className="flex gap-2">
              <select className="border rounded-md p-2 w-full">
                <option disabled selected>From</option>
                <option>Cash</option>
                <option>Bkash</option>
                <option>Nagad</option>
                <option>Bank</option>
              </select>
              <select className="border rounded-md p-2 w-full">
                <option disabled selected>To</option>
                <option>Cash</option>
                <option>Bkash</option>
                <option>Nagad</option>
                <option>Bank</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">ক্যটেগরী</label>
            <select className="border rounded-md p-2 w-full">
              <option>----</option>
              <option> আপ্যায়ন </option>
              <option>ওয়াইফাই </option>
              <option> টাকা নেওয়া </option>
              <option> ট্রেড লাইসেন্স </option>
              <option>দোকান ভাড়া </option>
              <option>নগদ </option>
              <option> বিদ্যুত বীল </option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">টাকার পরিমাণ</label>
            <input type="text" className="border rounded-md p-2 w-full" />
          </div>
          <div>
            <label className="block text-gray-700">তারিখ</label>
            <input
              type="date"
              className="border rounded-md p-2 w-full"
              value="2024-08-27"
            />
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

export default BalanceTransfer;
