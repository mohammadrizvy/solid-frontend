import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const BlunkSms = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb */}

      <DashboardBreadcrumb
        firstItem={"এসএমএস"}
        secondItem={"এসএমএস সকল ক্রেতা"}
      />

      {/* Form */}
      <div className="bg-base-200 shadow-md rounded-lg p-6">
        {/* SMS Textarea */}
        <div className="form-control mb-6">
          <label className="label font-semibold" htmlFor="sms-text">
            এসএমএস টেক্সট
          </label>
          <textarea
            id="sms-text"
            className="textarea textarea-bordered w-full h-32"
            placeholder="Type your SMS here..."
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="flex justify-end">
          <button className="btn btn-primay flex items-center">
            <AiOutlineSend className="mr-2" /> সেন্ড এসএমএস
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlunkSms;
