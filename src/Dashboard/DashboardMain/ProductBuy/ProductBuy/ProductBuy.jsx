import React from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const ProductBuy = () => {
  return (
     <div className="container mx-auto p-4">
       <DashboardBreadcrumb firstItem={"পণ্য ক্রয়"} secondItem={"পণ্য ক্রয়"} />
    <div className="p-4 bg-white rounded-lg shadow-md">

      <div className="grid grid-cols-4 gap-4 mb-4">
        <input
          type="date"
          className="input input-bordered w-full"
          defaultValue="2024-08-22"
        />
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="মেমো# 00-0000"
        />
        <select className="select select-bordered w-full">
          <option>সর্ববাহককারী</option>
        </select>
        <select className="select select-bordered w-full">
          <option>Cash</option>
        </select>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Search the Product"
        />
        <button className="btn btn-outline btn-primary ml-4">
          মেমো তালিকা
        </button>
      </div>

      <table className="table w-full mb-4">
        <thead>
          <tr className="bg-blue-200">
            <th></th>
            <th>বারকোড</th>
            <th>পণ্যের নাম</th>
            <th>ব্যাচ</th>
            <th>মেয়াদ</th>
            <th>পরিমান</th>
            <th>ক্রয় মূল্য</th>
            <th>বিক্রয় মূল্য</th>
            <th>মোট</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through products here */}
          <tr>
            <td>
              <button className="btn btn-square btn-error btn-sm">
                <i className="fa fa-trash"></i>
              </button>
            </td>
            <td>/* Barcode */</td>
            <td>/* Product Name */</td>
            <td>/* Batch */</td>
            <td>/* Expiry */</td>
            <td>/* Quantity */</td>
            <td>/* Purchase Price */</td>
            <td>/* Sale Price */</td>
            <td>/* Total */</td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          className="input input-bordered"
          placeholder="নগদ প্রদান"
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="বকেয়া"
        />
        <input type="text" className="input input-bordered" placeholder="গোছ" />
        <input
          type="text"
          className="input input-bordered"
          placeholder="কমিশন"
        />
        <input
          type="text"
          className="input input-bordered"
          placeholder="পরিবহন"
        />
      </div>

      <div className="flex  mt-4 space-x-2">
          <button className="btn btn-secondary">সেভ</button>
          <button className="btn btn-primary">রিসেট</button>
        </div>
    </div>
     </div>
  );
};

export default ProductBuy;
