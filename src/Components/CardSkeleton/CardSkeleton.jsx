import React from "react";

const CardSkeleton = () => {
  return (
    <div className="flex w-56 flex-col mx-auto gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default CardSkeleton;
