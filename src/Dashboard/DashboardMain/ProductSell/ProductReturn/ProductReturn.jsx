import React from 'react';

const ProductReturn = () => {
    return (
        <div className="p-6">
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-semibold">Sales Return &gt; Sales Return Add</h1>
        <button className="btn btn-outline btn-primary ml-auto">
          List Return
        </button>
      </div>
      <div className="card shadow-md bg-base-100 p-6">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">বারকোড</span>
          </label>
          <select className="select select-bordered">
            <option>----</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <label className="label">
            <span className="label-text">পরিমান</span>
          </label>
          <input type="number" placeholder="1" className="input input-bordered" />
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <label className="label">
            <span className="label-text">তারিখ</span>
          </label>
          <input type="date" className="input input-bordered" defaultValue="2024-08-22" />
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <label className="label">
            <span className="label-text">মন্তব্য</span>
          </label>
          <input type="text" className="input input-bordered" />
        </div>
        <div className="form-control w-full max-w-xs mt-4">
          <label className="label">
            <span className="label-text">Cash Return Mode</span>
          </label>
          <select className="select select-bordered">
            <option>----</option>
          </select>
        </div>
        <div className="flex mt-6">
          <button className="btn btn-primary mr-2">সেভ</button>
          <button className="btn btn-success">রিসেট</button>
        </div>
      </div>
    </div>
    );
};

export default ProductReturn;