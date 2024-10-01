import React from 'react';
import { FaFolder } from 'react-icons/fa';

const StockCategory = () => {
    const folders = [
        ['মধু', 'খেজুর', 'বীজ', 'ঘি'],
        ['তেল', 'ভিনেগার', 'কিসমিস'],
        ['বাদাম', 'ওলিভ ওয়েল', 'লবণ']
      ];
    return (
        <div className="p-4">
        <div className="card bg-white shadow-lg">
          <div className="card-body grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {folders.map((column, index) => (
              <div key={index} className="space-y-2">
                {column.map((folder, i) => (
                  <div key={i} className="flex items-center">
                    <FaFolder className="mr-2" />
                    <span>{folder}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default StockCategory;