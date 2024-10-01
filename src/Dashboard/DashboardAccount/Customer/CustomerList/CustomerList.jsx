import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import DataTable from "../../../../Components/DataTable/DataTable";

const CustomerList = () => {
  return (
    <div>
        <DashboardBreadcrumb
        firstItem={"ক্রেতা"}
        secondItem={"ক্রেতার তালিকা"}/>
        <DataTable></DataTable>
    </div>
  );
};

export default CustomerList;
