import React from 'react';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';
import DataTable from '../../../../Components/DataTable/DataTable';

const StockLow = () => {
    return (
        <div className="">
        <DashboardBreadcrumb
        firstItem={"স্টক"}
        secondItem={"অপর্যাপ্ত স্টক"}></DashboardBreadcrumb>
        <DataTable></DataTable>
      </div>
    );
};

export default StockLow;