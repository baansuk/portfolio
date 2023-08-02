import React from "react";
import ScrollToTopIcon from "../components/icons/ScrollToTopIcon";

const ScrollToTop = () => {
  return (
    <div className="left-0 bottom-0 w-[70px] h-[70px] fixed z-20 drop-shadow-lg rounded-full bg-[#9f7d35] m-10 flex flex-col justify-center items-center cursor-pointer">
      <ScrollToTopIcon width="50px" color="#5b3815" />
    </div>
  );
};

export default ScrollToTop;
