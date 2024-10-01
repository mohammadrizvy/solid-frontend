import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" min-h-screen justify-center flex items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#D19E47"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
