import React from 'react';
import DashboardBreadcrumb from '../../../../Components/DashboardBreadcurm/DashboardBreadcurm';

const StockExpired = () => {
    return (
        <div className="">
            <DashboardBreadcrumb
            firstItem={"স্টক"}
            secondItem={" List of Expired Medicines"}></DashboardBreadcrumb>
            <table className="table table-zebra w-full">
          <thead>
            <tr className="text-base text-secoundary">
              <th>বারকোড</th>
              <th>ক্যাটেগরি</th>
              <th>পণ্যের নাম</th>
              <th>ক্রয় মূল্য</th>
              <th>বিক্রয় মূল্য</th>
              <th>গ্রপ ইউনিট</th>
              <th>স্টক</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
            <p className='text-xl text-center my-20'>No data available in table </p>
        <div className="flex justify-center mt-4">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
        </div>
    );
};

export default StockExpired;