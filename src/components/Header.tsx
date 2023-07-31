import React, { useState } from "react";

const Header = () => {
  const headerLayout: string =
    "fixed flex flex-row justify-center items-center w-full h-[100px] bg-brownie hover:h-[150px] ";
  const headerAnimation: string = "transition-all duration-150 ease-in-out ";
  const headerInteraction: string = "cursor-pointer";
  const headerTypo: string =
    "fonts-sans text-base italic text-white font-black ";
  const headerStyle: string[] = [
    headerLayout,
    headerAnimation,
    headerTypo,
    headerInteraction,
  ];
  return <div className={headerStyle.join("")}>this is header</div>;
};

export default Header;
