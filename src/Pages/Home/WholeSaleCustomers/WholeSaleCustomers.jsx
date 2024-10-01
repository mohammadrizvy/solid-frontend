import React from "react";
import Marquee from "react-fast-marquee";

const WholeSaleCustomers = () => {
  return (
    <div className="mx-auto text-center py-10">
      <h1 className="text-4xl pb-10">বিক্রয় মাধ্যমগুলো</h1>
      <Marquee speed={50}  >
        <div className="flex items-center space-x-4">
          <img
            className="w-36 h-36 object-contain"
            src="/wholesaleCustomers/host-assist-02-05-150x150.jpg"
            alt="Wholesale Customer 1"
          />
          <img
            className="w-36 h-36 object-contain"
            src="/wholesaleCustomers/host-assist-02-06-150x150.jpg"
            alt="Wholesale Customer 2"
          />
          <img
            className="w-36 h-36 object-contain"
            src="/wholesaleCustomers/host-assist-02-07-150x150.jpg"
            alt="Wholesale Customer 3"
          />
          
          <img
            className="w-36 h-36 object-contain"
            src="/wholesaleCustomers/host-assist-02-09-150x150.jpg"
            alt="Wholesale Customer 5"
          />
          <img
            className="w-36 h-36 object-contain"
            src="/wholesaleCustomers/host-assist-02-10-150x150.jpg"
            alt="Wholesale Customer 6"
          />
          <img
            className="w-36 h-36 object-contain"
            src="/wholesaleCustomers/host-assist-02-11-150x150.jpg"
            alt="Wholesale Customer 7"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default WholeSaleCustomers;
