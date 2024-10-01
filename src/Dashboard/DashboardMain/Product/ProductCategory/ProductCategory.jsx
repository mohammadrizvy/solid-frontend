import React from "react";
import useProduct from "../../../../Hooks/useProduct";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const ProductCategory = () => {
  const [products, loading] = useProduct();
  return (
    <div className="container mx-auto p-4">

    <DashboardBreadcrumb
    firstItem={"পণ্য"}
    secondItem={"পণ্যের তালিকা"}/>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>ক্যাটেগরি</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Optins</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.category}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

                <td className="flex gap-3 ">
                  <FaEdit size={20} color="green" />
                  <MdDeleteForever color="red" size={25} />
                </td>
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
};

export default ProductCategory;
