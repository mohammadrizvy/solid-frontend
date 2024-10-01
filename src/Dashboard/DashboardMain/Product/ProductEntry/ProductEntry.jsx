import React, { useState } from "react";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";
import { IoBarcodeSharp } from "react-icons/io5";

const ProductEntry = () => {
  const [formData, setFormData] = useState({
    barcode: "74305801169",
    category: "",
    productName: "",
    unitPerReceipt: 0,
    unit: "",
    costPrice: "",
    sellingPrice: "",
    wholesalePrice: "",
    stockAlert: "",
    discount: "",
    point: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle form submission (e.g., send data to a server)
  };

  return (
    <div className="container mx-auto p-4">
        <DashboardBreadcrumb firstItem={"পণ্য"} secondItem={"পণ্য এন্ট্রি"} />
      <div className="bg-white shadow-md rounded p-10">
        {/* Breadcrumb */}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                বারকোড
              </label>
              <input
                type="text"
                name="barcode"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.barcode}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                অটো কোড
              </label>
              <button
                type="button"
                className="btn btn-sm flex justify-center items-center mt-1 w-full"
              >
                <IoBarcodeSharp size={30} />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ক্যাটেগরী <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                className="select select-sm select-bordered mt-1 w-full"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  ক্যাটেগরী নির্বাচন করুন
                </option>
                <option value="মধু">মধু</option>
                <option value="তেল">তেল</option>
                <option value="বাদাম">বাদাম</option>
                <option value="খেজুর">খেজুর</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                পণ্যের নাম <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="productName"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.productName}
                onChange={handleChange}
              />
            </div>

            {/* Other input fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ইউনিট প্রতি গ্রহণ
              </label>
              <input
                type="number"
                name="unitPerReceipt"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.unitPerReceipt}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ইউনিট
              </label>
              <select
                name="unit"
                className="select select-sm select-bordered mt-1 w-full"
                value={formData.unit}
                onChange={handleChange}
              >
                <option value="" disabled>
                  ----
                </option>
                <option value="Bag">Bag</option>
                <option value="Box">Box</option>
                <option value="Carton">Carton</option>
                <option value="Bucket">Bucket</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ক্রয় মূল্য <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="costPrice"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.costPrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                বিক্রয় মূল্য
              </label>
              <input
                type="text"
                name="sellingPrice"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.sellingPrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                পাইকারী মূল্য
              </label>
              <input
                type="text"
                name="wholesalePrice"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.wholesalePrice}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                স্টক এলার্ট
              </label>
              <input
                type="text"
                name="stockAlert"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.stockAlert}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ছাড়%
              </label>
              <input
                type="text"
                name="discount"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.discount}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                পয়েন্ট
              </label>
              <input
                type="text"
                name="point"
                className="input input-sm input-bordered mt-1 w-full"
                value={formData.point}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ছবি
              </label>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered file-input-sm mt-1 w-full"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <div>
              <button type="submit" className="btn btn-sm px-8 btn-primary">সেভ</button>
              <button
                type="button"
                className="btn btn-sm px-8 btn-secondary ml-2"
                onClick={() => setFormData({
                  barcode: "74305801169",
                  category: "",
                  productName: "",
                  unitPerReceipt: 0,
                  unit: "",
                  costPrice: "",
                  sellingPrice: "",
                  wholesalePrice: "",
                  stockAlert: "",
                  discount: "",
                  point: "",
                  image: null,
                })}
              >
                রিসেট
              </button>
            </div>

            <div>
              <button type="button" className="btn btn-sm">একাধিক এন্ট্রি</button>
              <button type="button" className="btn btn-sm ml-2">পণ্যের তালিকা</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEntry;
