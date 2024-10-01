import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { Link } from "lucide-react";
import { AiOutlineSend } from "react-icons/ai";
const SendSms = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb */}

      <DashboardBreadcrumb
        firstItem={"এসএমএস"}
        secondItem={"স্ট্যাটিক এসএমএস"}
      />

      {/* Form */}
      <div className="bg-base-200 shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 gap-4">
          {/* Mobile Number */}
          <div>
            <label className="label">
              <span className="label-text">মোবাইল নম্বর</span>
            </label>
            <input
              type="text"
              placeholder="Ex: 01700000000,01500000000"
              className="input input-bordered w-full"
            />
          </div>

          {/* SMS Text */}
          <div>
            <label className="label">
              <span className="label-text">এসএমএস টেক্সট</span>
            </label>
            <textarea
              placeholder="আপনার বার্তা এখানে লিখুন..."
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>
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

export default SendSms;
