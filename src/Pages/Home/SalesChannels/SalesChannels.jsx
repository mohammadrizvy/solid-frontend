import React from "react";

const SalesChannels = () => {
  return (
    <div className="mx-auto text-center py-10">
      <h1 className="text-4xl pb-10">পাইকারি ক্রেতা</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {/* --#-- */}
        <div className="lg:w-[20%] md:w-1/4 shadow-xl p-4">
          <img
            src="/SalesChannels/Sales-Point-Solid-Honey-01.png"
            alt="Sales Point Solid Honey 01"
          />
        </div>
        {/* --#-- */}
        <div className="lg:w-[20%] md:w-1/4 sm:w-1/6/6 shadow-xl p-4">
          <img
            src="/SalesChannels/Sales-Point-Solid-Honey-02.png"
            alt="Sales Point Solid Honey 02"
          />
        </div>
        {/* --#-- */}
        <div className="lg:w-[20%] md:w-1/4 shadow-xl p-4">
          <img
            src="/SalesChannels/Sales-Point-Solid-Honey-03.png"
            alt="Sales Point Solid Honey 03"
          />
        </div>
        {/* --#-- */}
        <div className="lg:w-[20%] md:w-1/4 shadow-xl p-4">
          <img
            src="/SalesChannels/Sales-Point-Solid-Honey-04.png"
            alt="Sales Point Solid Honey 04"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesChannels;
