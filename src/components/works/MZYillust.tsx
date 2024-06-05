import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const MZYIllust = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { modal, setModal } = useContext(ModalContext);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      modalRef.current && setScrollY(modalRef.current.scrollTop);
      modalRef.current && console.log(modalRef.current.scrollTop);
    };

    modalRef.current &&
      modalRef.current.addEventListener("scroll", handleScroll);

    return () => {
      modalRef.current &&
        modalRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full noScroll flex flex-col justify-start items-center bg-[#221b21] font-md text-[#f6dd62]">
      <div className="w-full h-[10%] font-md flex flex-row justify-between items-center fixed p-3 pl-8 text-xl bg-[#221b21]">
        <p>무중력지대 양천 일러스트 작업</p>{" "}
        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div
        className="w-full mt-[68px] h-[732px]  flex flex-col justify-start items-center typeMzyIllust overflow-y-auto overflow-x-hidden snap-y snap-mandatory relative"
        ref={modalRef}
      >
        <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative lg:p-10">
          <img
            className="lg:w-full absolute left-0 lg:top-0 top-0 object-cover subpixel-antialiased"
            src="/portfolio/mzyIllust_1.png"
            alt="mzy illustration"
          />
          <img
            className="h-[80px] absolute top-0 lg:right-0 object-cover z-20 subpixel-antialiased"
            src="/portfolio/mzyIllust_logo.png"
            alt="mzy illustration"
          />
          <img
            className="h-[80px] absolute top-40 lg:left-10 object-cover z-20 subpixel-antialiased"
            src="/portfolio/mzyIllust_twinkle.png"
            alt="mzy illustration"
          />
          <img
            className="h-[80px] absolute top-30 lg:right-10 object-cover z-20 subpixel-antialiased"
            src="/portfolio/mzyIllust_twinkle.png"
            alt="mzy illustration"
          />
          <div className=" h-[732px]"></div>
          <div className="lg:w-[40%] absolute left-0 top-0 w-full h-auto lg:p-5 p-2 flex flex-col justify-start items-start z-10 bg-[#221b21] ">
            <p className="font-black  px-3 underline">
              MUJUNGRYUCK FILM FESTIVAL SEOUL ‘22
            </p>
            <p className="p-3 text-left text-[15px] ">
              무중력지대 양천에 입사하고 가장 처음 작업한 일러스트입니다.
              무중력지대 양천의 전경과 내부에서 진행되는 활동들을 묘사한 벡터
              이미지로, 무중력지대 양천을 소개할때 쓰였습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative lg:p-10">
          <img
            className="lg:w-[75%] absolute right-0 lg:bottom-0 bottom-0 object-cover subpixel-antialiased"
            src="/portfolio/mzyIllust_detail-24_1.png"
            alt="mzy illustration"
          />
          <img
            className="lg:w-[75%] absolute right-0 lg:bottom-0 bottom-0 opacity-0 hover:opacity-100 transition-all object-cover subpixel-antialiased"
            src="/portfolio/mzyIllust_detail-24.png"
            alt="mzy illustration"
          />
          <img
            className="w-[260px] p-5 absolute top-0 lg:left-0 object-cover z-20 subpixel-antialiased drop-shadow-lg"
            src="/portfolio/mzyIllust_detail-26.png"
            alt="mzy illustration"
          />
          <img
            className="w-[260px] p-5 absolute bottom-0 lg:left-0 object-cover z-20 subpixel-antialiased drop-shadow-lg"
            src="/portfolio/mzyIllust_detail-27.png"
            alt="mzy illustration"
          />
          <img
            className="h-[35%] p-5 absolute top-0 lg:left-[23%] object-cover z-20 subpixel-antialiased drop-shadow-lg"
            src="/portfolio/mzyIllust_detail-25.png"
            alt="mzy illustration"
          />
          <img
            className="h-[35%] p-5 absolute top-0 lg:right-0 object-cover z-20 subpixel-antialiased drop-shadow-lg"
            src="/portfolio/mzyIllust_detail.png"
            alt="mzy illustration"
          />
          <img
            className="h-[60px] absolute bottom-5 lg:left-[20%] object-cover z-20 subpixel-antialiased"
            src="/portfolio/mzyIllust_twinkle.png"
            alt="mzy illustration"
          />
          <img
            className="h-[80px] absolute top-[30%] lg:right-5 object-cover z-20 subpixel-antialiased"
            src="/portfolio/mzyIllust_twinkle.png"
            alt="mzy illustration"
          />
          <div className=" h-[732px]"></div>
        </div>
      </div>
    </div>
  );
};

export default MZYIllust;
