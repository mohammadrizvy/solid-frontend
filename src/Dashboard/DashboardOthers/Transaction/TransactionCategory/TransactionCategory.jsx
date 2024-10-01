import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { DiamondPlus, Trash2 } from "lucide-react";

const TransactionCategory = () => {
  return (
    <div className="p-4">
     
      <div className="flex justify-between items-center mb-4">
        <DashboardBreadcrumb firstItem={"লেনদেন মাধ্যম"} secondItem={"এড ক্যাটেগরী"}/>
        <button className="btn btn-primary flex items-center">
          <FaFolderOpen className="mr-2" />
          লেনদেন খাত সমূহ
        </button>
      </div>

     

      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex items-center mb-4">
          <button className="btn btn-square btn-outline btn-error">
          <Trash2 color="black" />
          </button>
          <input type="checkbox" className="checkbox checkbox-info ml-4" />
          <label className="label ml-2">ক্যাটেগরী</label>
          <input type="text" className="input input-bordered w-full ml-2" />
          <button className="btn btn-square btn-warning ml-4">
          <DiamondPlus color="white" />
          </button>
        </div>

        <div className="flex  mt-6 space-x-2">
          <button className="btn btn-secondary">সেভ</button>
          <button className="btn btn-primary">রিসেট</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCategory;
