import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { AiOutlineSend } from "react-icons/ai";

const DueSms = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb */}

      <DashboardBreadcrumb
        firstItem={"এসএমএস"}
        secondItem={"বকেয়া এসএমএস নোটিফিকেশন"}
      />

      {/* Form */}
      <div className="bg-base-200 shadow-md rounded-lg p-6">
        <div className="text-sm mb-4">
          <p>*** Will be charged as per regular cost</p>
          <p>*** Keep SMS length within 160 characters</p>
        </div>

        {/* Agreement Checkbox */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              I Agree To Send to all dues customers
            </span>
            <input type="checkbox" className="checkbox checkbox-success ml-2" />
          </label>
        </div>

        {/* Send Button */}
        <div className="flex justify-end mt-6">
          <button className="btn btn-primary flex items-center">
            <AiOutlineSend className="mr-2" /> সেন্ড এসএমএস
          </button>
        </div>
      </div>
    </div>
  );
};

export default DueSms;
