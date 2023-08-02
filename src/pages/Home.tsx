import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../App";
import ScrollToTopIcon from "../components/icons/ScrollToTopIcon";
import WorkThumbnail from "../components/WorkThumbnail";
import works from "../data/works.json";

const Home = () => {
  const { modal, setModal } = useContext(ModalContext);
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToCover = () => {
    if (coverRef.current) {
      coverRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    if (worksRef.current) {
      worksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    if (resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="snap-y snap-mandatory overflow-hidden h-screen relative w-full ">
      <div
        className="left-0 bottom-0 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] fixed z-30  rounded-full  m-10 flex flex-col justify-center items-center cursor-pointer"
        onClick={scrollToCover}
      >
        <ScrollToTopIcon width="100%" color="#9f7d35" />
      </div>
      <div
        className="relative w-full h-screen overflow-hidden snap-center cursor-pointer bg-white bg-transparent z-50"
        ref={coverRef}
        onClick={scrollToContent}
      >
        <div className="absolute top-[5%] lg:top-[30%] left-[8%] text-[#5b3815] flex flex-col justify-start items-start">
          <p className=" font-black text-7xl">PORTFOLIO</p>
          <p className=" font-serif text-3xl italic my-4 bg-[#5b3815] text-[#9f7d35] lg:bg-opacity-0 lg:text-[#5b3815]">
            Bansuk Hwang
          </p>
        </div>
        <div className="absolute top-[90%] lg:top-[60%]  left-[8%] text-[#5b3815] flex flex-row justify-start items-end">
          <div className="w-[180px] border-b border-[1px] mr-2 lg:border-[#5b3815] border-[#9f7d35]"></div>
          <p className=" font-black text-3xl text-[#9f7d35] bg-[#5b3815] lg:bg-opacity-0 lg:text-[#5b3815]">
            calm and quiet.
          </p>
        </div>
        <div className="absolute top-[85%] w-full lg:top-[75%] lg:opacity-100 opacity-0 left-[8%] text-[#5b3815] flex flex-col justify-start items-start">
          <p className=" font-md text-lg">(+82)010-2629-2693</p>
          <p className=" font-md text-lg">baansuk_hwang@naver.com</p>
        </div>
        <div className="w-full h-screen flex flex-col justify-end items-end absolute -z-10">
          <video
            className="inset-0 w-full h-full object-cover -z-20 object-bottom-right"
            autoPlay
            loop
            muted
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="relative w-full h-screen overflow-hidden snap-center bg-[#5b3815] flex flex-col justify-start items-start"
        ref={contentRef}
      >
        <div className=" w-full my-5 z-20 text-[#9f7d35] flex flex-row justify-start items-end sticky">
          <div className="w-[80%] border-b border-[1px] mr-2 border-[#9f7d35]"></div>
          <p className=" w-[10%] lg:w-[20%] font-black text-xl lg:text-3xl text-right lg:text-left leading-5 lg:leading-auto mx-3">
            calm and quiet.
          </p>
        </div>
        <div className="w-full h-[50%] lg:w-[30%] lg:h-screen object-cover relative inset-0 overflow-hidden">
          <img
            className="opacity-60 mix-blend-soft-light h-full object-cover absolute"
            src="/profile_pic.png"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-start items-end absolute top-[28%] lg:top-0 left-0 z-20">
          <p className="w-full lg:w-[50%] text-[#9f7d35] text-lg lg:text-2xl lg:m-28 lg:p-0 p-10 indent-12 text-right whitespace-pre-wrap">
            안녕하세요. 회화적 요소를 기반으로 작업하는 시각 디자이너
            황반석입니다.{`\n`}상황에 따라 어울리는 다양한 매체를 활용하여
            탁월한 시각적 아웃풋을 만들어내기 위해 조용하고 차분하게 노력하고
            있습니다.
          </p>
        </div>
        <div className="w-full lg:h-auto h-[380px] inset-0 absolute z-20 flex flex-col justify-start top-[48%] font-light lg:top-[40%] items-end p-10 lg:p-28">
          <div
            onClick={scrollToWorks}
            className="w-full lg:w-[60%] h-[140px] border-b border-[#9f7d35]  flex flex-row justify-between cursor-pointer items-center text-3xl text-[#9f7d35] hover:bg-[#9f7d35] hover:text-[#5b3815]"
          >
            <p className="font-black text-4xl">01</p>
            <div className="flex flex-col w-[50%] justify-center items-end">
              <p>WORKS</p>
              <p>작업물</p>
            </div>
          </div>
          <div
            onClick={scrollToResume}
            className="w-full lg:w-[60%] h-[140px] border-b border-[#9f7d35] flex flex-row justify-between cursor-pointer items-center text-3xl text-[#9f7d35] hover:bg-[#9f7d35] hover:text-[#5b3815]"
          >
            <p className="font-black text-4xl">02</p>
            <div className="flex flex-col w-[50%] justify-center items-end">
              <p>RESUME</p>
              <p>이력서</p>
            </div>
          </div>
          <div
            onClick={scrollToContact}
            className="w-full lg:w-[60%] h-[140px] flex flex-row justify-between items-center text-3xl cursor-pointer text-[#9f7d35] hover:bg-[#9f7d35] hover:text-[#5b3815]"
          >
            <p className="font-black text-4xl">03</p>
            <div className="flex flex-col w-[50%] justify-center items-end">
              <p>CONTACT</p>
              <p>연락처</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={worksRef}
        className="relative w-full h-screen overflow-hidden snap-center bg-[#332811] flex flex-col justify-start items-center text-[#9f7d35]"
      >
        <div className="w-full h-screen flex flex-col justify-end items-end absolute z-20">
          <img
            className="h-full object-cover z-20 absolute right-0 object-bottom-right"
            src="/works_bg.png"
          />
        </div>

        <div className="w-full h-[100px] py-5  px-10 lg:px-28 flex flex-row justify-between items-center  border-b border-[#9f7d35]">
          <p className="font-black text-5xl">01.</p>
          <p className=" w-[10%] lg:w-[20%] font-black text-base lg:text-xl text-right lg:text-center leading-5 lg:leading-auto mx-3">
            calm and quiet.
          </p>
          <p className=" font-thin text-4xl italic z-20 ">WORKS</p>
        </div>
        <div className="w-full h-[50px] border-b  border-[#9f7d35] flex flex-row justify-center items-center lg:text-base text-sm gap-5 ">
          <p className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer">
            ALL
          </p>
          <p className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer">
            GRAPHIC
          </p>
          <p className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer">
            ILLUSTRATIONS
          </p>
        </div>
        <div className="w-[90%] h-[600px] flex flex-col justify-start items-center px-10 lg:px-28 py-10 overflow-y-auto overflow-x-hidden relative z-20 typeOne">
          <div className="w-auto lg:w-[1200px] h-auto flex lg:flex-row flex-col lg:flex-wrap justify-start lg:justify-start items-center lg:items-start ">
            {works.map((work) => {
              return <WorkThumbnail work={work} />;
            })}
          </div>
        </div>
      </div>
      <div
        ref={resumeRef}
        className="relative w-full h-screen overflow-hidden snap-center bg-[#5b3815]"
      ></div>
      <div
        ref={contactRef}
        className="relative w-full h-screen overflow-hidden snap-center bg-[#5b3815]"
      ></div>
    </div>
  );
};

export default Home;
