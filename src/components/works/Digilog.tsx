import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";
import { Link } from "react-router-dom";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const Digilog = () => {
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
    <div className="w-full h-full noScroll flex flex-col justify-start items-center bg-[#030303] font-md text-[#ffffff] leading-5">
      <div className="w-full h-[10%] font-md flex flex-row justify-between items-center fixed p-3 pl-8 text-xl bg-[#000000]">
        <p>2015 YUST Industrial Design 졸업전시회 DIGILOG 홍보영상</p>{" "}
        <div
          className="w-[40px] cursor-pointer font-thin text-xl"
          onClick={() => setModal({ open: false, id: "" })}
        >
          ╳
        </div>
      </div>
      <div
        className="w-full mt-[68px] h-[732px] flex flex-col justify-start items-center overflow-hidden gap-2 overflow-x-hidden snap-y snap-mandatory relative"
        ref={modalRef}
      >
        <div className="w-full h-full flex flex-col lg:flex-row justify-start lg:justify-between items-center snap-center relative lg:p-10">
          <video
            className=" w-[90%] h-[60%] object-cover object-center rounded-3xl"
            autoPlay
            controls
          >
            <source src="/portfolio/digilog.mp4" type="video/mp4" />
          </video>

          <div className="lg:w-[55%] w-full h-[732px] p-2 flex flex-col justify-center items-start z-10 mt-[10%]">
            <p className="font-black  px-3 underline">DIGILOG</p>
            <p className="p-3 text-left text-[14px]">
              2015년 중국 상하이에서 열린 졸업작품 전시회 당시
              졸업전시준비위원회로 참여하여 만든 영상입니다. 전시회의 주제는
              'DIGILOG'로, 디지털 기기에 아날로그적인 감성을 담는 제품을
              디자인하여 전시하였습니다. 이에 따라 영상은 철저히 분리되어 있는
              디지털 세상과 아날로그 세상이 전화기라는 매개체를 이용하여 그
              장벽을 허무는 다소 추상적인 의미를 담아 제작하였습니다.
            </p>
            <p className="p-3 text-left text-[10px] leading-3">
              BGM: Walking Home - Danny Elfman / Silver Linings Playbook
              Soundtrack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digilog;
