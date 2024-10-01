import React from 'react';
import DataTable from '../../../../Components/DataTable/DataTable';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';

const StockProduct = () => {
    return (
      <div className="">
        <DashboardBreadcrumb
        firstItem={"স্টক"}
        secondItem={"পণ্য স্টক"}></DashboardBreadcrumb>
        <DataTable></DataTable>
      </div>
    );
};

export default StockProduct;