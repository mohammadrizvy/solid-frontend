import React, { useState } from "react"; // Import useState
import useProduct from "../../../Hooks/useProduct";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageProduct = () => {
  const { data: products = [], refetch, isLoading } = useProduct();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get the current products to display
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleDeleteProduct = async (productId) => {
    console.log("Deleting product ID :", productId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/admin/product/remove/${productId}`
          );

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch(); // Refetch products after deletion to update the list
        } catch (error) {
          toast.error("Failed to delete the product");
        }
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table mx-auto max-w-5xl">
          {/* head */}
          <thead>
            <tr>
              <th>পন্য</th>
              <th>মূল্য</th>
              <th>উপলব্ধ স্টক</th>
              <th>আচরণ</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  {/* foot */}
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={`${import.meta.env.VITE_BASE_URL}${product.images}`}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.title}</div>
                      <div className="text-sm opacity-50">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {product.price} টাকা
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    ডিসকাউন্ট মূল্য : {product?.discount || "00"}
                  </span>
                </td>
                <td>{product.stock}</td>
                <th>
                  <Link to={`/product-details/${product.id}`}>
                    <button className="btn text-white mr-2 btn-accent btn-xs">
                      Details
                    </button>
                  </Link>
                  <button className="btn text-white mr-2 btn-info btn-xs">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="btn text-white mr-2 btn-error btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex items-center justify-center ">
        <div className="join">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`join-item btn btn-sm ${currentPage === index + 1 ? "btn-active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
