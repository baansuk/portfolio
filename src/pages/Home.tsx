import React, { useContext, useRef, useState } from "react";
import { ModalContext } from "../App";
import ScrollToTopIcon from "../components/icons/ScrollToTopIcon";
import WorkThumbnail from "../components/WorkThumbnail";
import works from "../data/works.json";
import NextIcon from "../components/icons/NextIcon";
import History from "../components/resume/History";
import Skill from "../components/resume/Skill";
import EmailIcon from "../components/icons/EmailIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import InstaIcon from "../components/icons/InstaIcon";
import BehanceIcon from "../components/icons/BehanceIcon";
import GithubIcon from "../components/icons/GithubIcon";
import Career from "../components/resume/Careeer";
import AsAPerson from "../components/resume/AsAPerson";

const Home = () => {
  const { modal, setModal } = useContext(ModalContext);
  const [resumeSection, setResumeSection] = useState("history");
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
    <div className="snap-y snap-mandatory overflow-hidden h-screen relative w-full lg:bg-transparent">
      <div
        className="left-0 bottom-0 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] fixed z-30  rounded-full  m-10 flex flex-col justify-center items-center cursor-pointer"
        onClick={scrollToCover}
      >
        <ScrollToTopIcon width="100%" color="#9f7d35" />
      </div>
      <div className="lg:hidden flex fixed z-50 w-screen h-screen inset-0 bg-black flex-col justify-center items-center text-white">
        <p className="  lg:w-[20%] z-20 font-black text-base lg:text-xl lg:leading-auto mb-5 ">
          calm and quiet.
        </p>{" "}
        모바일 환경에서는 지원되지 않습니다.
      </div>
      <div
        className="relative w-full h-screen overflow-hidden snap-center cursor-pointer bg-white bg-transparent z-40"
        ref={coverRef}
        onClick={scrollToContent}
      >
        <div className="absolute top-[5%] lg:top-[30%] left-[8%] text-[#5b3815] flex flex-col justify-start items-start">
          <p className=" font-black text-6xl">PORTFOLIO</p>
          <p className=" font-serif text-3xl italic my-4 bg-[#5b3815] text-[#9f7d35] lg:bg-opacity-0 lg:text-[#5b3815]">
            Bansuk Hwang
          </p>
        </div>
        <div className="absolute top-[90%] lg:top-[60%]  left-[8%] text-[#5b3815] flex flex-row justify-start items-end">
          <div className="w-[180px] border-b border-[1px] mr-2 lg:border-[#5b3815] border-[#9f7d35]"></div>
          <p className=" font-black text-2xl text-[#9f7d35] bg-[#5b3815] lg:bg-opacity-0 lg:text-[#5b3815]">
            calm and quiet.
          </p>
        </div>
        <div className="absolute top-[90%] w-full lg:top-[85%] lg:opacity-100 opacity-0 left-[8%] text-[#5b3815] flex flex-col justify-start items-start">
          <p className=" font-md text-sm">
            © 2023 Bansuk Hwang. All Rights Reserved.
          </p>
        </div>
        <div className="w-full h-screen flex flex-col justify-end items-end absolute -z-10">
          <video
            className="inset-0 w-full h-full object-cover -z-20 object-bottom-right"
            autoPlay
            loop
            muted
          >
            <source src="/portfolio/bg.mp4" type="video/mp4" />
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
        <div className="w-full h-[50%] lg:w-[20%] lg:h-screen object-cover relative inset-0 overflow-hidden">
          <img
            className="opacity-70 mix-blend-soft-light h-full object-cover absolute"
            src="/portfolio/profile_pic.png"
            alt="portfolio related"
          />
        </div>
        <img
          className="lg:h-[80%] h-[50%] top-[5%] lg:top-0 object-cover absolute lg:left-[12%] left-[20%] z-10 "
          src="/portfolio/profile_quote.png"
          alt="portfolio related"
        />
        <div className="w-full h-full flex flex-col justify-start items-end absolute top-[28%] lg:top-0 left-0 z-20">
          <p className="w-full lg:w-[50%] text-[#9f7d35] text-lg lg:text-lg lg:m-28 lg:p-0 p-10 indent-12 text-right whitespace-pre-wrap">
            안녕하세요. 일러스트 기반으로 작업하는 시각 디자이너 황반석입니다.
            {`\n`}상황에 따라 어울리는 다양한 매체를 활용하여 탁월한 시각적
            아웃풋을 만들어내기 위해 {`\n`}조용하고 차분하게, 하지만 꾸준히
            노력하고 있습니다.
          </p>
        </div>
        <div className="w-full lg:h-auto h-[380px] inset-0 absolute z-20 flex flex-col justify-start top-[48%] font-light lg:top-[40%] items-end p-10 lg:p-28">
          <div
            onClick={scrollToWorks}
            className="w-full lg:w-[70%] h-[140px] border-b border-[#9f7d35]  flex flex-row justify-between cursor-pointer items-center text-2xl text-[#9f7d35] hover:bg-[#9f7d35] hover:text-[#5b3815]"
          >
            <p className="font-black text-3xl">01</p>
            <div className="flex flex-col w-[50%] justify-center items-end">
              <p>PROJECTS</p>
              <p>프로젝트</p>
            </div>
          </div>
          <div
            onClick={scrollToResume}
            className="w-full lg:w-[70%] h-[140px] border-b border-[#9f7d35] flex flex-row justify-between cursor-pointer items-center text-2xl text-[#9f7d35] hover:bg-[#9f7d35] hover:text-[#5b3815]"
          >
            <p className="font-black text-3xl">02</p>
            <div className="flex flex-col w-[70%] justify-center items-end">
              <p>RESUME</p>
              <p>이력서</p>
            </div>
          </div>
          <div
            onClick={scrollToContact}
            className="w-full lg:w-[70%] h-[140px] flex flex-row justify-between items-center text-2xl cursor-pointer text-[#9f7d35] hover:bg-[#9f7d35] hover:text-[#5b3815]"
          >
            <p className="font-black text-3xl">03</p>
            <div className="flex flex-col w-[50%] justify-center items-end">
              <p>CONTACT</p>
              <p>연락처</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={worksRef}
        className="relative w-full h-screen overflow-hidden snap-center bg-[#3f3215] flex flex-col justify-start items-center text-[#9f7d35]"
      >
        <div className="w-full h-screen flex flex-col justify-end items-end absolute z-20">
          <img
            className="h-full object-cover z-20 absolute right-0 object-bottom-right"
            src="/portfolio/works_bg.png"
            alt="portfolio related"
          />
        </div>
        <div
          className="right-0 bottom-0 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] absolute z-30  rounded-full  m-10 flex flex-col justify-center items-center cursor-pointer"
          onClick={scrollToResume}
        >
          <NextIcon width="100%" color="#9f7d35" />
        </div>

        <div className="w-full h-[100px] py-5  px-10 lg:px-28 flex flex-row justify-between items-center  border-b border-[#9f7d35]">
          <p className=" w-[10%] lg:w-[20%] font-black text-base lg:text-xl text-left lg:text-center leading-5 lg:leading-auto mx-3">
            calm and quiet.
          </p>
          <img
            className=" h-[60px] z-20"
            src="/portfolio/profile_sections-25.png"
          />
        </div>
        {/* <div className="w-full h-[50px] border-b  border-[#9f7d35] flex flex-row justify-center items-center lg:text-base text-sm gap-5 ">
          <p className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer">
            ALL
          </p>
          <p className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer">
            GRAPHIC
          </p>
          <p className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer">
            ILLUSTRATIONS
          </p>
        </div> */}
        <div className="w-[70%] h-[600px] flex flex-col justify-start items-center px-10 lg:px-28 py-10 overflow-y-auto overflow-x-hidden relative z-20 typeOne">
          <div className="w-auto lg:w-[1000px] h-auto flex lg:flex-row flex-col lg:flex-wrap justify-start lg:justify-start items-center lg:items-start ">
            {works.map((work) => {
              return <WorkThumbnail work={work} />;
            })}
          </div>
        </div>
      </div>
      <div
        ref={resumeRef}
        className="relative w-full h-screen overflow-hidden snap-center bg-[#3f3215]  text-[#9f7b33]"
      >
        <div
          className="right-0 bottom-0 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] absolute z-30  rounded-full  m-10 flex flex-col justify-center items-center cursor-pointer"
          onClick={scrollToContact}
        >
          <NextIcon width="100%" color="#9f7d35" />
        </div>
        <div className="w-full h-[100px] py-5  px-10 lg:px-28 flex flex-row justify-between items-center  border-b border-[#9f7d35]">
          <p className=" w-[10%] lg:w-[20%] z-20 font-black text-base lg:text-xl text-left lg:text-center leading-5 lg:leading-auto mx-3">
            calm and quiet.
          </p>
          <img
            className=" h-[60px] z-10"
            src="/portfolio/profile_sections-26.png"
          />
        </div>
        <div className="w-full h-[50px] border-b  border-[#9f7d35] flex flex-row justify-center items-center lg:text-base text-sm gap-5 ">
          <p
            className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setResumeSection("history")}
          >
            HISTORY
          </p>
          <p
            className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setResumeSection("skill")}
          >
            SKILLS
          </p>
          <p
            className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setResumeSection("career")}
          >
            CAREER
          </p>
          <p
            className="z-20 rounded-full h-[30px] hover:bg-[#9f7d35] hover:text-[#332811] p-2 flex flex-col justify-center items-center cursor-pointer"
            onClick={() => setResumeSection("character")}
          >
            CHARACTERISTICS
          </p>
        </div>
        <div className="w-full h-[520px] flex flex-row  border-b border-[#9f7d35] justify-end items-end ">
          <div className=" h-full w-[15%] overflow-hidden">
            <img
              className="h-full object-cover opacity-70"
              src="/portfolio/profile_pic.png"
              alt="portfolio related"
            />
          </div>
          <div className=" h-full w-[25%] border-l  border-[#9f7d35] flex flex-col justify-start items-center p-5  overflow-y-auto overflow-x-hidden relative typeOne">
            <div className="w-full h-auto flex flex-col  text-lg">
              <p>황반석</p>
              <p>BANSUK HWANG</p>
              <p>1993.02.09</p>
              <p>서울특별시 강서구 화곡로350 1117호</p>
            </div>
            <div className="w-full h-auto flex flex-col py-5  text-lg">
              <p>baansuk_hwang@naver.com</p>
              <p>(+82)010-2629-2693</p>
            </div>
          </div>
          {resumeSection === "history" ? (
            <History />
          ) : resumeSection === "skill" ? (
            <Skill />
          ) : resumeSection === "career" ? (
            <Career />
          ) : (
            <AsAPerson />
          )}
        </div>
      </div>
      <div
        ref={contactRef}
        className="relative w-full h-screen overflow-hidden snap-center text-[#9f7d35]"
      >
        <div className="w-full h-screen flex flex-col justify-end items-end absolute -z-10 ">
          <video
            className="inset-0 w-full h-full object-cover -z-20 object-bottom-right"
            autoPlay
            loop
            muted
          >
            <source src="/portfolio/contact.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-[500px] absolute flex text-lg flex-col gap-3 left-[10%] top-[40%]">
          <img
            className=" w-[250px] z-10"
            src="/portfolio/profile_sections-27.png"
          />
          <div className=" ml-5 mt-5 w-[50%] flex flex-row gap-2">
            <PhoneIcon color="#9f7d35" width="30px" />
            (+82) 010-2629-2693
          </div>
          <div className=" ml-5 w-[50%] flex flex-row gap-2">
            <EmailIcon color="#9f7d35" width="30px" />
            baansuk_hwang@naver.com
          </div>
          <div className=" ml-5 w-[50%] flex flex-row gap-2">
            <a
              href="https://instagram.com/baansuk_draws"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:underline"
            >
              <InstaIcon color="#9f7d35" width="30px" />
              @baansuk_draws
            </a>
          </div>
          <div className=" ml-5 w-[80%] flex flex-row gap-2">
            <a
              href="https://www.behance.net/baansuk_hwfb99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:underline"
            >
              <BehanceIcon color="#9f7d35" width="30px" />
              baansuk_hwfb99
            </a>
          </div>
          <div className=" ml-5 w-[80%] flex flex-row gap-2">
            <a
              href="https://github.com/baansuk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2 hover:underline"
            >
              <GithubIcon color="#9f7d35" width="30px" />
              baansuk
            </a>
          </div>
        </div>
        <div className="w-full h-[100px] py-5  px-20 flex flex-row justify-end items-center  ">
          <p className=" w-[10%] lg:w-[20%] z-20 font-black text-base lg:text-xl text-right leading-5 lg:leading-auto ">
            calm and quiet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
