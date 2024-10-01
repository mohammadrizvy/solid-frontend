import React, { useEffect } from "react";
import useProduct from "../../../../Hooks/useProduct";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import DataTable from "../../../../Components/DataTable/DataTable";

const ProductList = () => {

  const [products , loading] = useProduct()

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(products)

  return (
    <div className="container mx-auto p-4">
      <DashboardBreadcrumb
    firstItem={"পণ্য"}
    secondItem={"পণ্যের তালিকা"}/>
    <DataTable></DataTable>
    </div>
    
  );
};

export default ProductList;
