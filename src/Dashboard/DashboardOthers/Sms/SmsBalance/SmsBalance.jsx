import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi2";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const SmsBalance = () => {
  return (
    <div>
        <DashboardBreadcrumb
        firstItem={"এসএমএস"}
        secondItem={"এসএমএস ব্যালেন্স"}/>
      <div className="mt-10 p-10 bg-base-200 rounded-2xl">
        <p className="flex text-xl font-semibold  ">Your balance is BDT: {"100"}  <FaBangladeshiTakaSign className="ml-1" size={12} /></p>
      </div>
    </div>
  );
};

export default SmsBalance;
