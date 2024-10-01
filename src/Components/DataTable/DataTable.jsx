import React, { useState, useEffect } from "react";
import useProduct from "../../Hooks/useProduct";

function DataTable() {
  const [products, loading] = useProduct();
  console.log(products);

  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <button className="btn  btn-secondary  ml-auto">
          ক্যাটেগরি স্টক
        </button>
      </div>
      <div className="overflow-x-auto">
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
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.barcode}</td>
                <td>{item.category}</td>
                <td>{item.productName}</td>
                <td>{item.costPrice}</td>
                <td>{item.sellingPrice}</td>
                <td>{item.unit}</td>
                <td>{item.stockAlert}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 1</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
