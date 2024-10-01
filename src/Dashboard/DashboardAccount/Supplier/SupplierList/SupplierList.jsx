import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import DataTable from "../../../../Components/DataTable/DataTable";

const SupplierList = () => {
  return (
    <div>
    <DashboardBreadcrumb firstItem={"সরবরাহকারী"} secondItem={"সরবরাহকারী তালিকা"}/>
    <DataTable></DataTable>
    </div>
  );
};

export default SupplierList;
