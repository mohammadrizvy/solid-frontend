import React from 'react';
import DataTable from '../../../../Components/DataTable/DataTable';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';

const ProductListPending = () => {
    return (
        <div>
            <DashboardBreadcrumb
            firstItem={"বিক্রয়"}
            secondItem={"বিক্রয় তালিকা"}
            />
            <DataTable/>
        </div>
    );
};

export default ProductListPending;